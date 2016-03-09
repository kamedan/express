var userCtr = require('../controllers/userCtr');
var User = require('../models/user');

var express = require('express');
var passport = require('passport');
var passportConf = require('../config/passport');
var router = express.Router();


router.route('/login').get(function(req, res){
    return userCtr.loginUserSuccess(req, res);
});
router.route('/loginFail').get(function(req, res){
    return userCtr.loginUserFail(req, res);
});

router.route('/logout').post(function(req, res){
    return userCtr.logout(req, res);
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/user/login',
    failureRedirect: '/user/loginFail',
    failureFlash: true
}));

router.route('/login').post(function(req, res){
    return userCtr.postloginUser(req, res);
});


/*router.get('/profile', function(req, res, next){

    User.findById({_id: req.params.id}, function(err, users){
        if (err) {
            return res.send(err);
        }
        console.log("--------"+users);
        res.json(users);

    });

   //return res.json(req.user);
});*/


router.route('/').get(function(req, res){
    return userCtr.getUser(req, res);
});


router.route('/').post(function(req, res){
    return userCtr.createUser(req, res);
});

router.route('/:id').put(function(req, res){
    return userCtr.editUser(req, res);
});

router.route('/:id').delete(function(req, res){
    return userCtr.deleteUser(req, res);
});

router.route('/:id').get(function(req, res){
    return userCtr.getUserById(req, res);
});



module.exports = router;