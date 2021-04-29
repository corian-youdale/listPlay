const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')

passport.use(
    new googleStrategy({
    //options for the strategy
    clientID: `${process.env.CLIENT_ID}`,
    callbackURL:`/auth/google/redirect`,
    clientSecret: `${process.env.CLIENT_SECRET}`
    }, () => {
        //passport callback function
    })
)

// Set up 'Authorized redirect URIs' to be localhost:3000/auth/google/redirect in google developer console