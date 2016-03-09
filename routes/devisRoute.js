var devisCtr = require('../controllers/devisCtr');

var express = require('express');
var router = express.Router();


router.route('/').get(function(req, res){
    return devisCtr.getDevis(req, res);
});


router.route('/').post(function(req, res){
    return devisCtr.createDevis(req, res);
});

router.route('/:id').put(function(req, res){
    return devisCtr.editDevis(req, res);
});

router.route('/:id').delete(function(req, res){
    return devisCtr.deleteDevis(req, res);
});

router.route('/:id').get(function(req, res){
    return devisCtr.getDevisById(req, res);
});

router.route('/apl/:id').get(function(req,res){
    return devisCtr.getDevisByAppelOffre(req, res);
});





module.exports = router;