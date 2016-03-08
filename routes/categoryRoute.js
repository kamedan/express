var categoryCtr = require('../controllers/categoryCtr');

var express = require('express');
var router = express.Router();


router.route('/').get(function(req, res){
    return categoryCtr.getCategory(req, res);
});


router.route('/').post(function(req, res){
    return categoryCtr.createCategory(req, res);
});

router.route('/:id').put(function(req, res){
    return categoryCtr.editCategory(req, res);
});

router.route('/:id').delete(function(req, res){
    return categoryCtr.deleteCategory(req, res);
});

router.route('/:id').get(function(req, res){
    return categoryCtr.getCategoryById(req, res);
});



module.exports = router;