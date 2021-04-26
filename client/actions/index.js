import { getSongs } from '../apis/songsAPI'
import { getNames } from '../apis/namesAPI'

export const SET_SONGS = 'SET_SONGS'
export const SET_NAMES = 'SET_NAMES'

export function setSongs (songs) {
  return {
    type: SET_SONGS,
    songs
  }
}

export function fetchSongs () {
  return dispatch => {
    return getSongs()
    .then(songs => {
      dispatch(setSongs(songs))
      return null
    })
  }
}

export function setNames (names) {
  return {
    type: SET_NAMES,
    names
  }
}

export function fetchNames () {
  return dispatch => {
    return getNames()
    .then(names => {
      dispatch(setNames(names))
      return null
    })
  }
}

