//  import { gapi } from 'gapi-script'
//https://medium.com/@augustinekwong/google-sign-in-for-reactjs-tutorial-1eb5d78ea2e6

 function authenticate() {
  return window.gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}

// let auth2 = await loadAuth2(gapi, clientId, scopes)

export const consoleMe = () => {
    console.log(window.gapi)
    // authenticate()
}