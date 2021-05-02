const express = require('express')
const path = require('path')
const passport = require('passport')
const server = express()

const songRoutes = require('./routes/songs')
const nameRoutes = require('./routes/names')
const profileRoutes = require('./routes/profile-routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// Auth Attempt
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('../client/config/passport-setup')

server.use(passport.initialize())
server.use(passport.session())

// Auth Attempt
server.use('/auth', authRoutes)
server.use('/profile', profileRoutes)


server.use('/api/v1/songs', songRoutes)
server.use('/api/v1/names', nameRoutes)



module.exports = server
