import React from 'react'

const Player = ({vidToRender}) => {
    
        return (
          <>
            <iframe width="854" height="480"
            src={`https://www.youtube.com/embed/${vidToRender}?autoplay=1`}> </iframe> 
          </>
         )
    
}

export default Player
