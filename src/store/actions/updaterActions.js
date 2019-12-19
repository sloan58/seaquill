import { ipcRenderer } from 'electron'
import { UPDATE_DOWNLOADING, UPDATE_READY } from './index'
import store from '../store'

// Actions
export const performUpdate = () => dispatch => {
  ipcRenderer.send('update:now')
}

// Listeners
ipcRenderer.on('update:downloading', () => {
  return store.dispatch({
    type: UPDATE_DOWNLOADING
  })
})
ipcRenderer.on('update:ready', () => {
  return store.dispatch({
    type: UPDATE_READY
  })
})
