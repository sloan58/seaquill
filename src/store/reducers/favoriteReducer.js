const initState = []

const favoriteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_FAVORITES':
      return action.payload
    case 'FAVORITE_QUERY':
      return [...state, action.payload]
    case 'UNFAVORITE_QUERY':
      let newFavoritesList = state.filter(
        favorite => favorite.id !== action.payload.id
      )
      return newFavoritesList
    case 'UPDATE_FAVORITE':
      return state.map(favorite => {
        if (favorite.id === action.payload.id) {
          return action.payload
        }
        return favorite
      })
    default:
      return state
  }
}

export default favoriteReducer
