import React from 'react'

import PlaylistDisplay from './PlaylistDisplay'
import Auth from './Auth'
// import SongSubmit from './SongSubmit'

export class App extends React.Component {
  render () {
    return (
      <>
      <Auth />
      <PlaylistDisplay />
      </>
    )
  }
}

export default (App)
