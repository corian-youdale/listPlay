import React from 'react'
import { connect } from 'react-redux'

import { fetchNames, fetchSongs } from '../actions'

export class App extends React.Component {
  state = {
    songs: [],
    names: []
  }

  componentDidMount () {
    this.props.dispatch(fetchSongs())
    this.props.dispatch(fetchNames())
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
       
       
        {/* form for submitting your song to the playlist */}
        <div>
          <form method="post">
            Your Name:
          <input type="text" name="name"/>
            Your Youtube URL:
            <input type="url" name="URL"/>
            <input type="submit" name="submit"/>
          </form>

          {/* Number of songs submitted */}
            <p>
              {/* displays the number of songs submitted to the playlist */}
            </p>

           {/* Button to start the game/ make the playlist - needs pop up warning that game will now start with X players */}
            <button type="button">
              Start the Game!
            </button>
        </div>
      </div>
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
