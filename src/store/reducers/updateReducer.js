const initState = {
  available: false,
  downloading: false,
  downloadProgress: 0,
  readyToInstall: false
}

const updateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_AVAILABLE':
      return { ...state, available: true }
    case 'UPDATE_DOWNLOADING':
      return { ...state, available: false, downloading: true }
    case 'UPDATE_PROGRESS':
      return { ...state, downloadProgress: action.payload }
    case 'UPDATE_READY':
      return { ...state, readyToInstall: true, downloading: false }
    case 'UPDATE_FAILED':
      return initState
    default:
      return state
  }
}

export default updateReducer
