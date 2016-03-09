var ProductDevis = require('../models/productDevis');


//afficher tous les productDevis
exports.getDevis = function(req, res){
    ProductDevis.find(function(err,productDeviss){
        if (err){
            return res.send(err);
        }

        res.json(productDeviss);

    });
}

//ajouter un productDevis
exports.createDevis = function(req, res){
    var productDevis = new ProductDevis({
        article : req.body.article,
        marque : req.body.marque,
        qte : req.body.qte,
        budget : req.body.budget,
        devisid: req.body.devisid
    });

    productDevis.save(function(err){
        if (err){
            return res.send(err);
        }

        res.send({message :'ProductDevis ajoutée'});
    });
}

//modifier un productDevis
exports.editDevis = function(req, res) {
    ProductDevis.findById({_id: req.params.id}, function(err, productDeviss){
        if (err) {
            return res.send(err);
        }
        for (prop in req.body)
        {
            productDeviss[prop] = req.body[prop];
        }
        productDeviss.save(function (err) {
            if (err) {
                return res.send(err);
            }
            res.send({message: 'ProductDevis modifiée !'});
        });

    });
}

exports.editDevis = function(req, res){

}

//supprimer un productDevis
exports.deleteDevis = function(req, res){

    ProductDevis.remove( {_id: req.params.id}, function(err, productDeviss){
        if (err){
            return res.send(err);
        }
        res.json({message: 'ProductDevis supprimée !'});
    });

}

