const express = require('express')

const db = require('../db/Songs')
const { request, response } = require('../server')

const router = express.Router()

router.get('/', (req, res) => {
  db.getSongs()
    .then(results => {
      res.json({ songs: results.map(song => song.song) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

// router.get('/ytURL/:number', (req, res) => {
//     const number = req.params.number
//     return request
//     .get(ytURL + number)
//     .then(response => {
//         res.json(response.body)
//     })
//     .catch(err => res.json({message: err}))
// })


module.exports = router
