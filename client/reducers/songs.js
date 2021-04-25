import { SET_SONGS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return action.songs
    default:
      return state
  }
}

export default reducer
