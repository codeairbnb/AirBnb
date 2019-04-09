const router = require('express').Router();
const passport = require('passport');
// login router with ouher
router.get('/login', (req,res) =>{
    res.render('login');
});

// outh logout
router.get('/logout', (req, res) => {
    res.send('logout with oauth');
});

// google login
router.get('/google', passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    res.send('you reach url')
})

module.exports = router;


