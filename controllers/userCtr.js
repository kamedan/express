var User = require('../models/user');



exports.loginUserSuccess = function(req, res){
    if(req.user){
        //res.redirect('/');
        res.json(req.user);
    }else{
        res.send({message: 'there is no user'});
    }
}

exports.logout = function(req, res){
    if(req.user){

        req.logout();
        res.send({message :'logout ok'});
    }
}

exports.loginUserFail = function(req, res){
    if(!req.user){
        //res.redirect('/');
        res.send({message :'utilisateur nest pas trouvé'});
    }
}



//afficher un utilisateur
exports.getUser = function(req, res){
    User.find(function(err,users){
        if (err){
            return res.send(err);
        }

        res.json(users);

    });
}



//ajouter un utilisateur
exports.createUser = function(req, res, next){
    var user = new User(req.body);

    User.findOne({email: req.body.email}, function(err, existingUser){
        if(existingUser){
            return res.send({message :'utlisateur existe deja ! '});

            //return req.flash('errors', 'utilisateur existe deja ')
        }else{
            user.save(function(err){
                if (err){
                    return res.send(err);
                }

                res.send({message :'utilisateur ajoutée'});
            });
        }
    });
}

//modifier un utilisateur
exports.editUser = function(req, res) {

    //Organizer.findOne().select(req.body.id).exec(function(err, organizers){
        User.findById({_id: req.params.id}, function(err, users){
        if (err) {
            return res.send(err);
        }
        for (prop in req.body)
        {
            users[prop] = req.body[prop];
        }

        users.save(function (err) {
            if (err) {
                return res.send(err);
            }
            res.send({message: 'utilisateur modifiée !'});
        });

    });
}


//afficher un utilisateur
exports.getUserById = function(req , res){

    User.findById({_id: req.params.id}, function(err, users){
        if (err) {
            return res.send(err);
        }
        res.json(users);
    });
}

//supprimer un utilisateur
exports.deleteUser = function(req, res){

    User.remove( {_id: req.params.id}, function(err, users){
        if (err){
            return res.send(err);
        }
        res.json({message: 'utilisateur supprimée !'});
    });

}
