const router = require('express').Router();

//Bring the register model
let user = require('../models/register-model');
 
router.get('/profile', (req, res) =>{
    res.render('profile');
});

router.post('/profile', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    req.checkbody('username', 'Username is required').noEmpty;
    req.checkbody('email', 'Email not Valid').isEmail;
    req.checkbody('password', 'Password is required').noEmpty;
    req.checkbody('confPassword', 'Password do not match').equals(req.body.password);

    let errors = req.validationErrors();

    if(errors){
        res.render('signup', {
            errors:errors
        })
    }else{
        let newUser = new User({
            username:username,
            email:email,
            password:password
        })

        bcrypt.gensalt(10,(err, salt) =>{
            bcrypt.hash(newUser.password, salt,(err,hash) =>{
                if(err){
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save((err) =>{
                    if(err){
                    console.log(err);
                    return;
                    }else{
                        res.redirect('/profile');
                    }
                })
            })
        })
    }
})

router.get('/profile', (req, res) => {
    res.render('profile');
})

module.exports = router;