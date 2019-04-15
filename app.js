const express = require('express');
const passportSetup = require('./config/passport-setup');
const expressValidator = require('express-validator');
const RouterOuth = require('./auther/outher-router');
const profileOuth = require('./auther/profile-router');
const registerOuther = require('./auther/register-router');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const db = require('./test/connection');
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
app.use('/profile', profileOuth);
app.use('/user', registerOuther);



//cookies session 

// cotrollers
app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000);
console.log('i am in port 3000');
