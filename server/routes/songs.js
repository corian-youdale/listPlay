const express = require('express')

const db = require('../db/Songs')
const { req, res } = require('../server')

const router = express.Router()

// GET /api/songs
router.get('/', (req, res) => {
  db.getSongs()
    .then(results => {
      res.json({ songs: results.map(song => song.song) }) //this gives the songs
      // res.json({ songs: results.map(song => song.name)}) // this gives the names
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
