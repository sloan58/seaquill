const initState = []

const ucmReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_UCMS':
      return action.payload
    case 'DELETE_UCM':
      return state.filter(ucm => {
        return ucm.id !== action.payload.id
      })
    case 'ADD_UCM':
      return [...state, action.payload]
    case 'UPDATE_UCM':
      return [
        ...state.filter(ucm => ucm.id !== action.payload.id),
        action.payload
      ]
    case 'QUERY_UCM':
      return state
    default:
      return state
  }
}

export default ucmReducer
