//devis model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


//schéma d'u devis
var devisSchema = new Schema({
    title: {type: String, required: true},
    description : String,
    createdOn: {type: Date, default: Date.now},
    createEnd: {type: Date},
    state : Boolean,
    userid: {type: Schema.Types.ObjectId , ref: 'User'},
    appelOffreid: {type: Schema.Types.ObjectId , ref: 'AppelOffre'}

});


module.exports = mongoose.model('Devis', devisSchema);
