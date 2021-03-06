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

router.route('/user/:id').get(function(req,res){
    return appelOffreRoute.getAppelOffresByUser(req, res);
});
router.route('/cat/:id').get(function(req,res){
    return appelOffreRoute.getAppelOffresByCategory(req, res);
});

router.route('/event/:id').get(function(req,res){
    return appelOffreRoute.getAppelOffresByEvent(req, res);
});





module.exports = router;