import React from 'react'
// import { loadGapiInsideDOM } from 'gapi-script';
// const gapi = await loadGapiInsideDOM()

import PlaylistDisplay from './PlaylistDisplay'
import SongSubmit from './SongSubmit';
// import SongSubmit from './SongSubmit'

export class App extends React.Component {

  componentDidMount(){

  }

  render () {
    return (
      <PlaylistDisplay />
    )
  }
}

export default (App)
