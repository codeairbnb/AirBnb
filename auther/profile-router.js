const router = require('express').Router();
//  const bcrypt = require('bcryptjs');

 const user = require('../models/google-model');
const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/');
    }else{
        next();
    }
}
router.get('/', authCheck, (req,res) => {
    res.render('profile', {user:req.user});
});

router.get('/profile', (req,res) =>{
    res.render('profile');
});
module.exports = router;