import request from 'superagent'

const rootUrl = '/api/v1'

export function getNames () {
    return request.get(rootUrl + '/names')
    .then(res => {
        console.log(res.body.names)
        return res.body.names
    })
}