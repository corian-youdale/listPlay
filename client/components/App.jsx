import React from 'react'
import { connect } from 'react-redux'

import { fetchSongs } from '../actions'

export class App extends React.Component {
  state = {
    songs: []
  }

  componentDidMount () {
    this.props.dispatch(fetchSongs())
  }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with Songs!</h1>
        <ul>
          {this.props.songs.map(song => (
            <li key={song}>{song}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    songs: globalState.songs
  }
}

export default connect(mapStateToProps)(App)
