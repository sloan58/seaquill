import ucmReducer from './ucmReducer'
import queryReducer from './queryReducer'
import favoriteReducer from './favoriteReducer'
import updateReducer from './updateReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  ucms: ucmReducer,
  queryManager: queryReducer,
  favorites: favoriteReducer,
  updater: updateReducer
})

export default rootReducer
