import React, { useState, useEffect } from 'react'
import { getPlaylist } from '../actions/youtube'

const PlaylistDisplay = () => {
  const [videoArray, setVideoArray] = useState([])

  useEffect(() => {
    const data = getPlaylist()
    data.then((data) => {
     return setVideoArray(returnTitleUrlData(data))
    })
  }, [])

  return (
    <ul>
      {videoArray.map((video) => <li key={video.title}><a href={video.url}>{video.title}</a></li>)}
    </ul>
  )
}

const returnTitleUrlData = (data) => {
  return data.items.map((song) => {
    return {
      title: song.snippet.title,
      url: `https://www.youtube.com/watch?v=${song.snippet.resourceId.videoId}`
    }
  })
}

export default PlaylistDisplay
