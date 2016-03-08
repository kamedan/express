//appelOffre model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


//schéma d'un appel offre
var appelOffreSchema = new Schema({
    title: String, //{type: String, required: true},
    description : String,
    category : {type: Schema.Types.ObjectId , ref: 'Category'},
    retraitCahierCharge : String,
    createdOn: {type: Date, default: Date.now},
    createEnd: {type: Date},
    state : Boolean,
    userid: {type: Schema.Types.ObjectId , ref: 'User'},
    eventid: {type: Schema.Types.ObjectId , ref: 'Event'}
});




var AppelOffre = mongoose.model('AppelOffre', appelOffreSchema);

module.exports = AppelOffre;