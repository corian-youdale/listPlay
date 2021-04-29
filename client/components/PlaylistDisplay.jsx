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
      {videoArray.map((video) =><ul key={video.videoId}>
                                  <li ><a href={video.url}>{video.title}</a></li>
                                  <li ><img src={video.thumbnailURL}></img></li>
                                </ul>
      )}
    </ul>
  )
}

const returnTitleUrlData = (data) => {
  console.log(data.items.length) // gives the current number of songs in the playlist
  return data.items.map((song) => {
    return {
      thumbnailURL: song.snippet.thumbnails.default.url,
      videoId: song.snippet.resourceId.videoId,
      title: song.snippet.title,
      url: `https://www.youtube.com/watch?v=${song.snippet.resourceId.videoId}`,
    }
  })
}

export default PlaylistDisplay
