const electron = require('electron')
const { dialog } = electron
const { app, BrowserWindow, ipcMain } = electron
const axlClient = require('./axl/axlClient')
const log = require('electron-log')
const os = require('os')
const fs = require('fs')
const csvWriter = require('csv-write-stream')
const path = require('path')
const db = require('electron-db')
const isDev = require('electron-is-dev')
const moment = require('moment')
const { autoUpdater } = require('electron-updater')

log.info(`Process says isDev = ${isDev}`)

autoUpdater.logger = log
autoUpdater.autoDownload = false
autoUpdater.autoInstallOnAppQuit = false
log.info(`Set autoUpdater properties`)

function createDb() {
  const tables = ['ucms', 'favorites']
  log.info(`Defined DB table: ${tables}`)

  tables.forEach(table => {
    log.info(`Creating table: ${table}`)
    db.createTable(table, (success, message) => {
      log.info(`Create table said: success: ${success}, message: ${message} `)
    })
  })
}

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const URL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`

  log.info(`Loading url ${URL}`)
  mainWindow.loadURL(URL)

  if (isDev) {
    log.info(`Running dev process setup`)

    // Configure Dev Tools
    log.info(`Adding dev tools extensions`)
    BrowserWindow.addDevToolsExtension(
      path.join(
        os.homedir(),
        '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.2.1_0'
      )
    )
    BrowserWindow.addDevToolsExtension(
      path.join(
        os.homedir(),
        '/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0'
      )
    )

    // log.info(`Opening developer tools`)
    // Open the DevTools
    // mainWindow.webContents.openDevTools()
  }
  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', event => {
  log.info(`App ready received`)

  autoUpdater
    .checkForUpdates()
    .then(res => log.info(`Update Available ${res}`))
    .catch(err => log.error(`Update Error ${err}`))

  log.info(`Creating new Database`)
  createDb()

  log.info(`Creating new BrowserWindow`)
  createWindow()
})

app.on('window-all-closed', () => {
  log.info(`All windows closed`)
  if (process.platform !== 'darwin') {
    log.info(`Platform is not darwin.  Quitting app`)
    app.quit()
  }
})

app.on('activate', () => {
  log.info(`app activated`)
  if (mainWindow === null) {
    log.info(`mainWindow is null.  Creating window`)
    createWindow()
  }
})

// UCM Management Events
ipcMain.on('get:ucms', event => {
  db.getAll('ucms', (success, data) => {
    if (success) {
      mainWindow.webContents.send('ready:ucms', data)
    } else {
      console.log('Could not get:ucms', success, data)
      mainWindow.webContents.send('ready:ucms', [])
    }
  })
})

ipcMain.on('create:ucm', (event, ucm) => {
  db.insertTableContent('ucms', ucm, (success, message) => {
    if (success) {
      mainWindow.webContents.send('created:ucm', ucm)
    } else {
      console.log('Could not create:ucm', success, message)
    }
  })
})

ipcMain.on('update:ucm', (event, ucm) => {
  db.updateRow('ucms', { id: ucm.id }, ucm, (success, message) => {
    if (success) {
      mainWindow.webContents.send('updated:ucm', ucm)
    } else {
      console.log('Could not update:ucm', success, message)
    }
  })
})

ipcMain.on('delete:ucm', (event, ucm) => {
  db.deleteRow('ucms', { id: ucm.id }, (success, message) => {
    if (success) {
      mainWindow.webContents.send('deleted:ucm', ucm)
    } else {
      console.log('Could not delete:ucm', success, message)
    }
  })
})

// Query Events
ipcMain.on('submit:query', (event, { query, targets }) => {
  const promises = targets.map(target => {
    return new Promise((resolve, reject) => {
      db.search('ucms', 'id', target.value, (success, match) => {
        if (success) {
          event.reply('targeting:query', target)
          axlClient
            .executeSqlQuery(query, match[0])
            .then(res => {
              res.map((row, index) => {
                Object.assign(row, { id: index, ucm: target.label })
              })
              event.reply('success:query', { rows: res, target: target.label })
              resolve()
            })
            .catch(err => {
              event.reply('error:query', { err, target })
              resolve()
            })
        }
      })
    })
  })

  Promise.all(promises).then(results => {
    event.reply('completed:query')
  })
})

ipcMain.on('submit:export', (event, results) => {
  dialog
    .showSaveDialog(mainWindow, {
      title: 'Select Save Location',
      defaultPath: `*/seaquill_export_${moment().format('MM-DD-YYYY')}.csv`,
      properties: ['openDirectory'],
      message: 'Select Save Location'
    })
    .then(({ canceled, filePath }) => {
      if (canceled) {
        event.reply('cancelled:export')
        return
      }
      let writer = csvWriter()
      writer.pipe(fs.createWriteStream(filePath))
      results.map(row => {
        return writer.write(row)
      })
      writer.end()
      event.reply('completed:export')
    })
})

// Favorites Events
ipcMain.on('get:favorites', event => {
  db.getAll('favorites', (success, data) => {
    if (success) {
      mainWindow.webContents.send('ready:favorites', data)
    } else {
      console.log('Could not get:favorites', success, data)
      mainWindow.webContents.send('ready:favorites', [])
    }
  })
})
ipcMain.on('add:favorite', (event, favorite) => {
  db.insertTableContent('favorites', favorite, (success, message) => {
    if (success) {
      mainWindow.webContents.send('created:favorite', favorite)
    } else {
      console.log('Could not add:favorite', success, message)
    }
  })
})
ipcMain.on('remove:favorite', (event, favorite) => {
  db.deleteRow('favorites', { id: favorite.id }, (success, message) => {
    if (success) {
      mainWindow.webContents.send('removed:favorite', favorite)
    } else {
      console.log('Could not remove:favorite', success, message)
    }
  })
})
ipcMain.on('update:favorite', (event, favorite) => {
  db.updateRow(
    'favorites',
    { id: favorite.id },
    favorite,
    (success, message) => {
      if (success) {
        mainWindow.webContents.send('updated:favorite', favorite)
      } else {
        console.log('Could not update:favorite', success, message)
      }
    }
  )
})

// Auto Updater
autoUpdater.on('update-available', () => {
  log.info(`autoUpdater received update-available`)
  log.info(`Firing update-available to renderer`)
  mainWindow.webContents.send('update-available')
})
autoUpdater.on('download-progress', progressObj => {
  log.info(`autoUpdater received download-progress`)
  log.info(`Firing download-progress to renderer`)
  mainWindow.webContents.send('download-progress')
})
autoUpdater.on('update-downloaded', () => {
  log.info(`autoUpdater received update-downloaded`)
  log.info(`Firing update-downloaded to renderer`)
  mainWindow.webContents.send('update-downloaded')
})
ipcMain.on('download-now', () => {
  log.info(`ipcMain receievd download-now`)
  log.info(`Downloading update`)
  autoUpdater
    .downloadUpdate()
    .then(res => {
      log.info(`Received ${res} response after download request`)
      mainWindow.webContents.send('update-downloaded')
    })
    .catch(err => {
      log.info(`Received ${err} error after download request`)
      mainWindow.webContents.send('update-failed')
    })
})
ipcMain.on('update-now', () => {
  log.info(`ipcMain receievd update-now`)
  log.info(`Installing app and restarting`)
  autoUpdater.quitAndInstall()
})
