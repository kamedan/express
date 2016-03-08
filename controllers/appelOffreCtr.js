var AppelOffre = require('../models/appelOffre');


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
    var appelOffre = new AppelOffre(req.body);

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
