import request from 'superagent'

const rootUrl = '/api/v1'

export function getSongs () {
  return request.get(rootUrl + '/songs')
    .then(res => {
      return res.body.songs
    })
}
