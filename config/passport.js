    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var User = require('../models/user');

    //serialize and deserialize

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });



    //midlleware

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function(req, email, password, done) {
        User.findOne({ email: email}, function(err, user) {
            if (err) return done(err);

            if (!user) {
                //return callback
                return done(null, false, {message : 'nnn'} );
                //res.send({message :'utlisateur nexiste pas '})
            }

            if (!user.comparePassword(password)) {
                return done(null, false, res.send({message :'mot de passe incorrect ! '}));
            }
            return done(null, user);
        });
    }));


    //function validate
    exports.isAuthenticated = function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.send({message :'non authentifier !  '})
        //res.redirect('/login');
    }