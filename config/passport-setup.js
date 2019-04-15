const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
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

// use google stratgy
passport.use(
    new GoogleStrategy({
    //google strategy options
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret:keys.google.clientSecret
},(accessToken, refreshToken, profile, done) => {
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
  
})
)