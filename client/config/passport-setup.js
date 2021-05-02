const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const cli_ID = `${process.env.CLIENT_ID}`
const cli_SC = `${process.env.CLIENT_SECRET}`

passport.serializeUser((user, done) => {
    done(null, user.id);
});

// passport.deserializeUser((id, done) => {
//     User.findById(id).then((user) => {
//         done(null, user);
//     });
// });

passport.use(
    new GoogleStrategy({
    //options for the strategy
    clientID: '850706506498-nds9o5g32vq9r3tfp6i4k3erd1cih2co.apps.googleusercontent.com',
    callbackURL:'/auth/google/redirect',
    clientSecret: 'OfO98uz1rq0qDx0OTkrNtcej',
}, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        // User.findOne({googleId: profile.id}).then((currentUser) => {
        //     if(currentUser){
        //         // already have this user
        //         console.log('user is: ', currentUser);
        //         done(null, currentUser);
        //     } else {
        //         // if not, create user in our db
        //         new User({
        //             googleId: profile.id,
        //             username: profile.displayName,
        //             thumbnail: profile._json.image.url
        //         }).save().then((newUser) => {
        //             console.log('created new user: ', newUser);
        //             done(null, newUser);
        //         });
        //     }
        // });
    })
)

// Set up 'Authorized redirect URIs' to be localhost:3000/auth/google/redirect in google developer console