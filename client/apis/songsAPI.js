import request from 'superagent'

// const serverURL = 'http://localhost:3000/api/v1'

// const youtubeURL = 'youtube URL '


const rootUrl = '/api/v1'

export function getSongs () {
  return request.get(rootUrl + '/songs')
    .then(res => {
      console.log(res.body.songs)
      // return res.body
      return res.body.songs
    })
}
