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

router.get('/facebook', (req,res) =>{
    //handle with passport
    res.send('login with facebook');
});

router.get('/google/redirect', (req,res)=>{
    res.send('you reach url')
})

module.exports = router;


