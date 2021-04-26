import { SET_NAMES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_NAMES:
        return action.names
      default:
        return state
    }
}

export default reducer