const initState = {
  query: '',
  queryInProgress: false,
  exportProgress: false,
  targets: [],
  results: { rows: [], columns: [] }
}

const queryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return { ...state, query: action.payload }
    case 'QUERY_INITIATED':
      return { ...state, queryInProgress: true }
    case 'QUERY_COMPLETED':
      return {
        ...state,
        queryInProgress: false
      }
    case 'EXPORT_INITIATED':
      return { ...state, exportInProgress: true }
    case 'EXPORT_COMPLETED':
      return {
        ...state,
        exportInProgress: false
      }
    case 'RECIEVED_RESULTS':
      let rowUpdate = action.payload.rows.concat(state.results.rows)
      return {
        ...state,
        results: { rows: rowUpdate, columns: action.payload.columns }
      }
    case 'CLEAR_RESULTS':
      return { ...state, results: { rows: [], columns: [] } }
    case 'UPDATE_TARGETS':
      return { ...state, targets: action.payload }
    case 'REMOVE_TARGET':
      return {
        ...state,
        targets: state.targets.filter(
          target => target.value !== action.payload.id
        )
      }
    default:
      return state
  }
}

export default queryReducer
