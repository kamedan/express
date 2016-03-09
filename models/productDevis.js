//productDevis model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var productSchema = new Schema({
    article : String,
    marque : String,
    qte : Number,
    budget : Number,
    devisid: {type: Schema.Types.ObjectId , ref: 'Devis'}

});

module.exports = mongoose.model('Product', productSchema);
