var Category = require('../models/category');


//afficher un category
exports.getCategory = function(req, res){
    Category.find(function(err,categories){
        if (err){
            return res.send(err);
        }

        res.json(categories);

    });
}

//ajouter un category
exports.createCategory = function(req, res){
    var category = new Category(req.body);

    category.save(function(err){
        if (err){
            return res.send(err);
        }

        res.send({message :'category ajoutée'});
    });
}

//modifier un category
exports.editCategory = function(req, res) {
    Category.findById({_id: req.params.id}, function(err, categories){
        if (err) {
            return res.send(err);
        }
        for (prop in req.body)
        {
            categories[prop] = req.body[prop];
        }


        categories.save(function (err) {
            if (err) {
                return res.send(err);
            }
            res.send({message: 'category modifiée !'});
        });

    });
}


//afficher un category par id
exports.getCategoryById = function(req , res){

    Category.findById({_id: req.params.id}, function(err, categories){
        if (err) {
            return res.send(err);
        }
        res.json(categories);
    });
}
//supprimer un category
exports.deleteCategory = function(req, res){

    Category.remove( {_id: req.params.id}, function(err, categories){
        if (err){
            return res.send(err);
        }
        res.json({message: 'category supprimée !'});
    });

}
