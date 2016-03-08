//cateory model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var categorySchema = new Schema({
    title : {type: String, required: true},
    description : String,
});



var Category = mongoose.model('Category', categorySchema);

module.exports = Category;