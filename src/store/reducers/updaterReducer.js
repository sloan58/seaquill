const initState = {
  downloading: false,
  readyToInstall: false
}

const updaterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_DOWNLOADING':
      return { ...state, downloading: true }
    case 'UPDATE_READY':
      return { ...state, readyToInstall: true, downloading: false }
    default:
      return state
  }
}

export default updaterReducer
