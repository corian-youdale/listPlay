import { combineReducers } from 'redux'

import songs from './songs'
import names from './names'

export default combineReducers({
  songs,
  names
})
