var Event = require('../models/event');


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
    var event = new Event(req.body);

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
