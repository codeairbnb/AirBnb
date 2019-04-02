const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');


// use google stratgy
passport.use(new googleStrategy({
    //google strategy options
    callbackURL:'/auth/google/redirect',
    clientID:'213009799272-iap1r3h394ubl9nanhbrdj0efpkvls32.apps.googleusercontent.com',
    clientsecret:'KM5BOZIIa57l0SoUOBCEnM5K'
},() => {
    // callback function
}));