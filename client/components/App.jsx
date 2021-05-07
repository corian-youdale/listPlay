import React from 'react'
import { connect } from 'react-redux'

import { fetchNames, fetchSongs } from '../actions'
import SongSubmit from './SongSubmit'
import Player from './Player'
import GapiFunctions from './GapiFunctions'

export class App extends React.Component {

  loadYoutubeApi() {
    const script = document.createElement("script")
    script.src = "https://apis.google.com/js/client.js"
  
    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey(process.env.API_KEY)
        gapi.client.load('youtube', 'v3', () => {
          this.setState({ gapiReady: true })
        })
      })
    }
    document.body.appendChild(script)
  }

  componentDidMount() {
    this.loadYoutubeApi()
  }

  render () {
    if (this.state?.gapiReady){
      return (
        <>
          <SongSubmit />
          <GapiFunctions />
          {/* <Player vidToRender={"o_9AqM5jz7c"}/> */}
        </>
      )
    }
    return(
      <h1>Loading ...</h1>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    songs: globalState.songs,
    names: globalState.names
  }
}

export default connect(mapStateToProps)(App)
