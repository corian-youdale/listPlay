const express= require('express')
const db = require('../db/namesDb')

const router = express.Router()

// GET /api/names (?)

router.get('/', (req, res) => {
    db.getNames()
    .then(results => {
      res.json({ songs: results.map(song => song.name)}) // this gives the names
        return null
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Somthing went wrong' })
      })
})

module.exports = router
