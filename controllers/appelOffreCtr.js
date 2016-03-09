var AppelOffre = require('../models/appelOffre');
var User = require('../models/user');


//afficher un appel Offre
exports.getAppelOffres = function(req, res){
    AppelOffre.find(function(err,appelOffres){
        if (err){
            return res.send(err);
        }

        res.json(appelOffres);

    });
}

//ajouter un appel Offre
exports.createAppelOffre = function(req, res){
    var appelOffre = new AppelOffre({
            title : req.body.title,
            description : req.body.description,
            category : req.body.category,
            retraitCahierCharge : req.body.retraitCahierCharge,
            createEnd: req.body.createEnd,
            state : req.body.state,
            eventid: req.body.eventid,
            userid: req.user.id

    });

    appelOffre.save(function(err){
        if (err){
            return res.send(err);
        }

        res.send({message :'appel Offre ajoutée'});
    });
}

//modifier un appel Offre
exports.editAppelOffre = function(req, res) {

    AppelOffre.findById({_id: req.params.id}, function(err, appelOffres){
        if (err) {
            return res.send(err);
        }
        for (prop in req.body)
        {
            appelOffres[prop] = req.body[prop];
        }


        appelOffres.save(function (err) {
            if (err) {
                return res.send(err);
            }
            res.send({message: 'appel Offre modifiée !'});
        });

    });
}


//afficher un appel Offre
exports.getAppelOffreById = function(req , res){

    AppelOffre.findById({_id: req.params.id}, function(err, appelOffres){
        if (err) {
            return res.send(err);
        }
        res.json(appelOffres);
    });
}
//supprimer un appel Offre
exports.deleteAppelOffre = function(req, res){

    AppelOffre.remove( {_id: req.params.id}, function(err, appelOffres){
        if (err){
            return res.send(err);
        }
        res.json({message: 'appel Offre supprimée !'});
    });

}

//afficher les appels offres par utilisateur
exports.getAppelOffresByUser = function(req, res) {
    AppelOffre.find({userid : req.params.id }).exec(function(err, appelOffres){
        if (err) {
            return res.send(err);
        }
        res.json(appelOffres);
    });
}

//afficher les appels offres par category
exports.getAppelOffresByCategory = function(req, res) {
    AppelOffre.find({category : req.params.id }).exec(function(err, appelOffres){
        if (err) {
            return res.send(err);
        }
        res.json(appelOffres);
    });
}

//afficher les appels offres par evennement
exports.getAppelOffresByEvent = function(req, res) {
    AppelOffre.find({eventid : req.params.id }).exec(function(err, appelOffres){
        if (err) {
            return res.send(err);
        }
        res.json(appelOffres);
    });
}


