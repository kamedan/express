var appelOffreRoute = require('../controllers/appelOffreCtr');

var express = require('express');
var router = express.Router();


router.route('/').get(function(req, res){
    return appelOffreRoute.getAppelOffres(req, res);
});


router.route('/').post(function(req, res){
    return appelOffreRoute.createAppelOffre(req, res);
});

router.route('/:id').put(function(req, res){
    return appelOffreRoute.editAppelOffre(req, res);
});

router.route('/:id').delete(function(req, res){
    return appelOffreRoute.deleteAppelOffre(req, res);
});

router.route('/:id').get(function(req, res){
    return appelOffreRoute.getAppelOffreById(req, res);
});



module.exports = router;