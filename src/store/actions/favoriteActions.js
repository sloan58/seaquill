import { ipcRenderer } from 'electron'
import {
  GET_FAVORITES,
  UPDATE_FAVORITE,
  FAVORITE_QUERY,
  UNFAVORITE_QUERY
} from './index'
import store from '../store'
import { toast } from 'react-toastify'
import toastStylingSuccess from '../../styles/toastStyles'

// Actions
export const getFavorites = () => dispatch => {
  ipcRenderer.send('get:favorites')
}

export const updateFavorite = favorite => dispatch => {
  ipcRenderer.send('update:favorite', favorite)
}

export const favoriteQuery = favorite => dispatch => {
  ipcRenderer.send('add:favorite', favorite)
}

export const unfavoriteQuery = favorite => dispatch => {
  ipcRenderer.send('remove:favorite', favorite)
}

// IPC Listeners
ipcRenderer.on('ready:favorites', (event, favorites) => {
  return store.dispatch({
    type: GET_FAVORITES,
    payload: favorites
  })
})

ipcRenderer.on('created:favorite', (event, favorite) => {
  console.log('created:favorite')
  toast('Added to Favorites!', toastStylingSuccess)
  return store.dispatch({
    type: FAVORITE_QUERY,
    payload: favorite
  })
})
ipcRenderer.on('removed:favorite', (event, favorite) => {
  toast('Favorite Removed!', toastStylingSuccess)
  return store.dispatch({
    type: UNFAVORITE_QUERY,
    payload: favorite
  })
})
ipcRenderer.on('updated:favorite', (event, favorite) => {
  toast('Favorite Updated!', toastStylingSuccess)
  return store.dispatch({
    type: UPDATE_FAVORITE,
    payload: favorite
  })
})
