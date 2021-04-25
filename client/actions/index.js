import { getSongs } from '../apis/songs' 

export const SET_SONGS = 'SET_SONGS'

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
