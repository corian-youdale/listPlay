import React from 'react'

import PlaylistDisplay from './PlaylistDisplay'
import Auth from './Auth'
// import SongSubmit from './SongSubmit'

console.log(`${process.env.CLIENT_ID}`)
console.log(`${process.env.CLIENT_SECRET}`)


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
