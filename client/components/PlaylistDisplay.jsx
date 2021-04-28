import React, { useState, useEffect } from 'react'
import { getPlaylist } from '../actions/youtube'

const PlaylistDisplay = () => {
  const [videoArray, setVideoArray] = useState([])

  useEffect(() => {
    const data = getPlaylist()
    data.then((data) => {
     return setVideoArray(returnTitleUrlData(data))
    //  return setVideoArray(returnVideoThumbnail(data)) Gets Small Thumbnail
    })
  }, [])

  return (
    <ul>
      {videoArray.map((video) => <li key={video.title}><a href={video.url}>{video.title}</a></li>)}
      {/* {videoArray.map((video) => <li key={video.title}><img src={video.thumbnailURL}></img></li>)} GETS THUMBNAIL */}
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

// displays small thumbnail for each video
const returnVideoThumbnail = (data) => {
  return data.items.map((song) => {
    console.log(song)
    return {
      thumbnailURL: song.snippet.thumbnails.default.url,
      url: `https://www.youtube.com/watch?v=${song.snippet.resourceId.videoId}`
    }
  })
}

export default PlaylistDisplay
