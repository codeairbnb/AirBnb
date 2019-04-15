const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
<<<<<<< HEAD
const User = require('../models/google-model');
const keys = require('./keys');

passport.serializeUser((user,done)=>{
    done(null,user.id);

})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user) =>{
        done(null,user);
    })

})
=======
const User = require('../models/user-model');
const keys = require('./keys');

>>>>>>> fccd69b3b00dea74c13e9ddf5990d8ddaf92ec1d

// use google stratgy
passport.use(
    new GoogleStrategy({
    //google strategy options
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret:keys.google.clientSecret
},(accessToken, refreshToken, profile, done) => {
<<<<<<< HEAD
  User.findOne({googleId:profile.id}).then((currentUser) =>{
      if(currentUser){
          console.log('User is :',  currentUser)
          done(null,currentUser)
      }else{
        new User({
            username: profile.displayName,
            googleId: profile.id
        }).save().then((newUser) => {
            console.log('new user created' + newUser);
            done(null,newUser);
        });
        }
  });
  
=======
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
>>>>>>> fccd69b3b00dea74c13e9ddf5990d8ddaf92ec1d
})
)