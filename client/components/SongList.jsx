import React, { useState, useEffect } from 'react'

const SongList = () => {    
    return (
        <ul>
            {props.state.url.map(song => {
                return <li>{song.title}</li>
            })}
        </ul>
    )

}
export default SongList