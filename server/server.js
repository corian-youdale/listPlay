const express = require('express')
const path = require('path')

const songRoutes = require('./routes/songs')
const nameRoutes = require('./routes/names')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/songs', songRoutes)
server.use('/api/v1/names', nameRoutes)

module.exports = server
