const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user-model');
const keys = require('./keys');


// use google stratgy
passport.use(
    new GoogleStrategy({
    //google strategy options
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret:keys.google.clientSecret
},(accessToken, refreshToken, profile, done) => {
    // callback function
    console.log('callback fun');
    //  console.log(profile);

    new User({
        username: profile.displayName,
        googleId: profile.id
    }).save().then((newUser) => {
        console.log('new user created' + newUser);
    }).catch((err) => {
        console.log(err);
    })
})
)