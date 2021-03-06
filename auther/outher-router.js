const router = require('express').Router();
const passport = require('passport');
// login router with ouher
router.get('/login', (req,res) =>{
    res.render('login');
});

router.get('/landlord', (req,res) =>{
    res.render('landlord');
});

router.get('/signup', (req, res) =>{
    res.render('signup');
});

// outh logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// google login
router.get('/google', passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    res.redirect('/profile/') ;
});

router.get('/landlordProfile', (req, res) =>{
    res.render('landlordProfile');
});

module.exports = router;


