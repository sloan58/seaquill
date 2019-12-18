import ucmReducer from './ucmReducer'
import queryReducer from './queryReducer'
import favoriteReducer from './favoriteReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  ucms: ucmReducer,
  queryManager: queryReducer,
  favorites: favoriteReducer
})

export default rootReducer
