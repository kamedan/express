var Devis = require('../models/devis');


//afficher tous les devis
exports.getDevis = function(req, res){
    Devis.find(function(err,deviss){
        if (err){
            return res.send(err);
        }

        res.json(deviss);

    });
}

//ajouter un devis
exports.createDevis = function(req, res){
    var devis = new Devis({
        title : req.body.title,
        description : req.body.description,
        createEnd: req.body.createEnd,
        state : req.body.state,
        userid: req.user.id,
        appelOffreid : req.body.appelOffreid
    });

    devis.save(function(err){
        if (err){
            return res.send(err);
        }

        res.send({message :'Devis ajoutée'});
    });
}

//modifier un devis
exports.editDevis = function(req, res) {
    Devis.findById({_id: req.params.id}, function(err, deviss){
        if (err) {
            return res.send(err);
        }
        for (prop in req.body)
        {
            deviss[prop] = req.body[prop];
        }
        deviss.save(function (err) {
            if (err) {
                return res.send(err);
            }
            res.send({message: 'Devis modifiée !'});
        });

    });
}

//afficher un devis par id
exports.getDevisById = function(req , res){

    Devis.findById({_id: req.params.id}, function(err, deviss){
        if (err) {
            return res.send(err);
        }
        res.json(deviss);
    });
}
//supprimer un devis
exports.deleteDevis = function(req, res){

    Devis.remove( {_id: req.params.id}, function(err, deviss){
        if (err){
            return res.send(err);
        }
        res.json({message: 'Devis supprimée !'});
    });

}

//afficher les devis par appeldoffre
exports.getDevisByAppelOffre = function(req, res) {

    Devis.find({appelOffreid : req.params.id }).populate('appelOffre').exec(function(err, deviss){
        if (err) {
            return res.send(err);
        }
        res.json(deviss);
    });
}
