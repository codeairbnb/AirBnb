const router = require('express').Router();
const passport = require('passport');
// login router with ouher
router.get('/login', (req,res) =>{
    res.render('login');
});

<<<<<<< HEAD
router.get('/signup', (req, res) =>{
    res.render('signup');
})

// outh logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
=======
// outh logout
router.get('/logout', (req, res) => {
    res.send('logout with oauth');
>>>>>>> fccd69b3b00dea74c13e9ddf5990d8ddaf92ec1d
});

// google login
router.get('/google', passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
<<<<<<< HEAD
    res.redirect('/profile/') ;
});
=======
    res.send('you reach url')
})
>>>>>>> fccd69b3b00dea74c13e9ddf5990d8ddaf92ec1d

module.exports = router;


