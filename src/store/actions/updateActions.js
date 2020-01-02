import { ipcRenderer } from 'electron'
import {
  UPDATE_AVAILABLE,
  UPDATE_DOWNLOADING,
  UPDATE_PROGRESS,
  UPDATE_READY,
  UPDATE_FAILED
} from './index'
import store from '../store'

// Actions
export const downloadUpdate = () => dispatch => {
  console.log('Sending downloadUpdate to ipcMain')
  ipcRenderer.send('download-now')
  return store.dispatch({
    type: UPDATE_DOWNLOADING
  })
}

export const performUpdate = () => dispatch => {
  console.log('Sending performUpdate to ipcMain')
  ipcRenderer.send('update-now')
}

// Listeners
ipcRenderer.on('update-available', () => {
  console.log('Recieved update-available from ipcMain')
  return store.dispatch({
    type: UPDATE_AVAILABLE
  })
})
ipcRenderer.on('download-progress', (event, { progress }) => {
  console.log('Recieved download-progress from ipcMain')
  return store.dispatch({
    type: UPDATE_PROGRESS,
    payload: progress
  })
})
ipcRenderer.on('update-downloaded', () => {
  console.log('Recieved update-downloaded')
  return store.dispatch({
    type: UPDATE_READY
  })
})
ipcRenderer.on('update-failed', () => {
  console.log('Recieved update-failed')
  return store.dispatch({
    type: UPDATE_FAILED
  })
})
