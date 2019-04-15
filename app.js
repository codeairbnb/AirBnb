const express = require('express');
const passportSetup = require('./config/passport-setup');
<<<<<<< HEAD
const expressValidator = require('express-validator');
const RouterOuth = require('./auther/outher-router');
const profileOuth = require('./auther/profile-router');
const registerOuther = require('./auther/register-router');
const bodyParser = require('body-parser');
const db = require('./test/connection');
const keys = require('./config/keys')
=======
const RouterOuth = require('./auther/outher-router');
const db = require('./test/connection');
>>>>>>> fccd69b3b00dea74c13e9ddf5990d8ddaf92ec1d
const app = express();
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');

app.use(cookieSession({ 
  maxAge: 168 * 420 * 420 * 7000,
  keys:[keys.session.cookieKey] 
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.use('/materialize', express.static('materialize'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//use authRouter
app.use('/auth', RouterOuth);
<<<<<<< HEAD
app.use('/profile', profileOuth);
app.use('/user', registerOuther);



//cookies session 

=======
>>>>>>> fccd69b3b00dea74c13e9ddf5990d8ddaf92ec1d

// cotrollers
app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000);
console.log('i am in port 3000');
