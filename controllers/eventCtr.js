var Event = require('../models/event');
var User = require('../models/user');


//afficher tous les evennements
exports.getEvent = function(req, res){
    Event.find(function(err,events){
        if (err){
            return res.send(err);
        }

        res.json(events);

    });
}

//ajouter un evennment
exports.createEvent = function(req, res){
    var event = new Event({
        title : req.body.title,
        description : req.body.description,
        adress : req.body.adress,
        country : req.body.country,
        createEnd: req.body.createEnd,
        state : req.body.state,
        userid: req.user.id
    });

    event.save(function(err){
        if (err){
            return res.send(err);
        }

        res.send({message :'evennement ajoutée'});
    });
}

//modifier un evennement
exports.editEvent = function(req, res) {
    Event.findById({_id: req.params.id}, function(err, events){
        if (err) {
            return res.send(err);
        }
        for (prop in req.body)
        {
            events[prop] = req.body[prop];
        }
        events.save(function (err) {
            if (err) {
                return res.send(err);
            }
            res.send({message: 'evennement modifiée !'});
        });

    });
}


//afficher un evennement par id
exports.getEventById = function(req , res){

    Event.findById({_id: req.params.id}, function(err, events){
        if (err) {
            return res.send(err);
        }
        res.json(events);
    });
}
//supprimer un evennement
exports.deleteEvent = function(req, res){

    Event.remove( {_id: req.params.id}, function(err, events){
        if (err){
            return res.send(err);
        }
        res.json({message: 'evennement supprimée !'});
    });

}

//afficher les evennements par utilisateur
exports.getEventsByUser = function(req, res) {

    Event.find({userid : req.params.id }).populate('user').exec(function(err, events){
    if (err) {
        return res.send(err);
    }
    res.json(events);
});
}
