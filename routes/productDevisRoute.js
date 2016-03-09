var productDevisCtr = require('../controllers/productDevisCtr');

var express = require('express');
var router = express.Router();


router.route('/').get(function(req, res){
    return productDevisCtr.getDevis(req, res);
});


router.route('/').post(function(req, res){
    return productDevisCtr.createDevis(req, res);
});

router.route('/:id').put(function(req, res){
    return productDevisCtr.editDevis(req, res);
});

router.route('/:id').delete(function(req, res){
    return productDevisCtr.deleteDevis(req, res);
});







module.exports = router;