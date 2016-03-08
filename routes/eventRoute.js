var eventCtr = require('../controllers/eventCtr');

var express = require('express');
var router = express.Router();


router.route('/').get(function(req, res){
    return eventCtr.getEvent(req, res);
});


router.route('/').post(function(req, res){
    return eventCtr.createEvent(req, res);
});

router.route('/:id').put(function(req, res){
    return eventCtr.editEvent(req, res);
});

router.route('/:id').delete(function(req, res){
    return eventCtr.deleteEvent(req, res);
});

router.route('/:id').get(function(req, res){
    return eventCtr.getEventById(req, res);
});



module.exports = router;