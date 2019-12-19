import ucmReducer from './ucmReducer'
import queryReducer from './queryReducer'
import favoriteReducer from './favoriteReducer'
import { combineReducers } from 'redux'
import updaterReducer from './updaterReducer'

const rootReducer = combineReducers({
  ucms: ucmReducer,
  queryManager: queryReducer,
  favorites: favoriteReducer,
  updater: updaterReducer
})

export default rootReducer
