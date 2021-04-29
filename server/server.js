const express = require('express')
const path = require('path')

const songRoutes = require('./routes/songs')
const nameRoutes = require('./routes/names')

// Auth Attempt
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('../client/config/passport-setup')

const server = express()

// Auth Attempt
server.use('/auth', authRoutes)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/songs', songRoutes)
server.use('/api/v1/names', nameRoutes)

module.exports = server
