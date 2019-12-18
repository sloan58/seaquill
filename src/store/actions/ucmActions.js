import { ipcRenderer } from 'electron'
import { toast } from 'react-toastify'
import toastStylingSuccess from '../../styles/toastStyles'
import {
  REMOVE_TARGET,
  GET_UCMS,
  ADD_UCM,
  UPDATE_UCM,
  DELETE_UCM
} from './index'
import store from '../store'

// Actions
export const getUcms = () => dispatch => {
  ipcRenderer.send('get:ucms')
}

export const createUcm = ucm => dispatch => {
  ipcRenderer.send('create:ucm', ucm)
}

export const updateUcm = ucm => dispatch => {
  ipcRenderer.send('update:ucm', ucm)
}

export const deleteUcm = ucm => dispatch => {
  ipcRenderer.send('delete:ucm', ucm)
}

// IPC Listeners
ipcRenderer.on('ready:ucms', (event, ucms) => {
  return store.dispatch({
    type: GET_UCMS,
    payload: ucms
  })
})

ipcRenderer.on('created:ucm', (event, ucm) => {
  toast('UCM Added', toastStylingSuccess)
  return store.dispatch({
    type: ADD_UCM,
    payload: ucm
  })
})

ipcRenderer.on('updated:ucm', (event, ucm) => {
  toast('UCM Updated', toastStylingSuccess)
  return store.dispatch({
    type: UPDATE_UCM,
    payload: ucm
  })
})

ipcRenderer.on('deleted:ucm', (event, ucm) => {
  toast('UCM Removed', toastStylingSuccess)
  store.dispatch({
    type: REMOVE_TARGET,
    payload: ucm
  })
  store.dispatch({
    type: DELETE_UCM,
    payload: ucm
  })
})
