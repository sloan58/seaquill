import React from 'react'
import { ipcRenderer } from 'electron'
import {
  QUERY_INITIATED,
  QUERY_COMPLETED,
  UPDATE_QUERY,
  RECIEVED_RESULTS,
  CLEAR_RESULTS,
  UPDATE_TARGETS,
  EXPORT_INITIATED,
  EXPORT_COMPLETED
} from './index'
import { textFilter } from 'react-bootstrap-table2-filter'
import { toast } from 'react-toastify'
import store from '../store'
import toastStylingSuccess from '../../styles/toastStyles'

// Actions
export const updateQuery = query => dispatch => {
  return dispatch({
    type: UPDATE_QUERY,
    payload: query
  })
}

export const submitQuery = (query, targets) => dispatch => {
  dispatch({
    type: QUERY_INITIATED
  })

  ipcRenderer.send('submit:query', { query, targets })
}

export const clearResults = () => dispatch => {
  return dispatch({
    type: CLEAR_RESULTS
  })
}
export const updateTargets = targets => dispatch => {
  return dispatch({
    type: UPDATE_TARGETS,
    payload: targets
  })
}

export const exportResults = results => dispatch => {
  ipcRenderer.send('submit:export', results)
  return dispatch({
    type: EXPORT_INITIATED
  })
}

// IPC Listeners
ipcRenderer.on('completed:query', event => {
  return store.dispatch({
    type: QUERY_COMPLETED
  })
})
ipcRenderer.on('success:query', (event, { rows, target }) => {
  if (!rows.length) {
    toast.warning(`No matching rows for ${target}`, {
      autoClose: false,
      newestOnTop: true
    })
  } else {
    const columns = Object.keys(rows[0]).map(column => {
      if (column == 'id') {
        return {
          dataField: column,
          text: column,
          hidden: true
        }
      }
      return {
        dataField: column,
        text: column,
        sort: true,
        filter: textFilter()
      }
    })
    return store.dispatch({
      type: RECIEVED_RESULTS,
      payload: { rows, columns }
    })
  }
})
ipcRenderer.on('error:query', (event, { err, target }) => {
  toast.error(
    <div>
      Sorry, {target.label} responded with:
      <br />
      <b>{err}</b>
    </div>,
    {
      autoClose: false,
      newestOnTop: true
    }
  )
})
ipcRenderer.on('completed:export', event => {
  toast('Download Complete!', toastStylingSuccess)
  return store.dispatch({
    type: EXPORT_COMPLETED
  })
})
ipcRenderer.on('cancelled:export', event => {
  return store.dispatch({
    type: EXPORT_COMPLETED
  })
})
