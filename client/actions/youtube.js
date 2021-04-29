//  import { gapi } from 'gapi-script'
//https://medium.com/@augustinekwong/google-sign-in-for-reactjs-tutorial-1eb5d78ea2e6

//  function authenticate() {
//   return window.gapi.auth2.getAuthInstance()
//       .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
//       .then(function() { console.log("Sign-in successful"); },
//             function(err) { console.error("Error signing in", err); });
// }

// // let auth2 = await loadAuth2(gapi, clientId, scopes)

// export const consoleMe = () => {
//     console.log(window.gapi)
//     // authenticate()
// }
import request from 'superagent'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'

export function getPlaylist (playlist = 'PLMRLNkTQP6q8xQhR-C0Bn-nVJr5eEZkaT') {
    return request.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet,contentDetails&playlistId=${playlist}&key=${process.env.API_KEY}`)
    .then(res => {
        console.log(res.body)
        return res.body
    })
}