import React from 'react'

 const GapiFunctions = () => {


  const authenticate = () => {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  const loadClient = () => {
    gapi.client.setApiKey(process.env.API_KEY);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  const execute = () => {
    return gapi.client.youtube.playlists.list({
      "part": [
        "contentDetails"
      ],
      "id": [
        "PLPYEFh97tAFMm84tSSU4oVvzrsywuU6ec",
      ],
      // "mine": true
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

  function executeAddToPlaylist() {
    return gapi.client.youtube.playlistItems.insert({
      "part": [
        "snippet"
      ],
      "resource": {
        "snippet": {
          "playlistId": "PLPYEFh97tAFMm84tSSU4oVvzrsywuU6ec",
          "position": 0,
          "resourceId": {
            "kind": "youtube#video",
            "videoId": "M7FIvfx5J10"
          }
        }
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: process.env.CLIENT_ID});
  });

  return (
    <>
      <button onClick={() => authenticate().then(loadClient)}>authorize and load</button>
      <button onClick={execute}>execute</button>
      <button onClick={executeAddToPlaylist}>Add to playlist</button>
    </>
  )
}

export default GapiFunctions