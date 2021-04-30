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
import { gapi, loadAuth2 } from 'gapi-script'
import request from 'superagent'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'

export function getPlaylist (playlist = 'PLMRLNkTQP6q8xQhR-C0Bn-nVJr5eEZkaT') {
    return request.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&part=contentDetails&playlistId=${playlist}&key=${process.env.API_KEY}`)
    .then(res => {
        console.log(res.body)
        return res.body
    })
}

// let auth2 = await loadAuth2(gapi, clientId, scopes)
// console.log(auth2)

// export function initClient(){
//     console.log(gapi)
//     gapi.client.init({
//         apiKey: process.env.API_KEY,
//         clientId: process.env.CLIENT_ID
//     })
//     .then(() => {
//         GoogleAuth = gapi.auth2.getAuthInstance()

//         GoogleAuth.isSignedIn.listen(updateSigninStatus)
//     })
// }

export const setAuth2 = async () => {
    const auth2 = await loadAuth2(gapi, process.env.CLIENT_ID, '')
    if (auth2.isSignedIn.get()) {
        return auth2.currentUser.get()
    } else {
        console.log("singIn")
        return auth2.signIn()
    }
}
//   setAuth2()

const updateUser = (currentUser) => {
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    setUser({
      name: name,
      profileImg: profileImg,
    });
  };

  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(element, {},
      (googleUser) => {
        updateUser(googleUser);
      }, (error) => {
      console.log(JSON.stringify(error))
    });
  };

  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setUser(null);
      console.log('User signed out.');
    });
  }