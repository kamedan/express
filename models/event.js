//event model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var eventSchema = new Schema({
    title : String, //{type: String, required: true},
    description : String,
    adress : String,
    country :String,
    createdOn: {type: Date, default: Date.now},
    createEnd: {type: Date},
    state : Boolean,
    userid: {type: Schema.Types.ObjectId , ref: 'User'}
});






var Event = mongoose.model('Event', eventSchema);

module.exports = Event;