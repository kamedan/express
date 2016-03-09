//user model

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;


//schéma d'un utilisateur
var userSchema = new Schema({
	name: {type: String, required: true},
	lastname : {type: String, required: true},
	email : {type: String, required: true},
	password : {type: String, required: true},
	role: String,
	nsiret: Number,
	entrepriseName : String,
	adress : String,
	country : String,
	state : String,
	phoneNumber : Number,
	mobileNumber : String, //{type: String, required: true},
	fax : Number,
	website : String,
	description : String, //{type: String, required: true},
	createdOn: {type: Date, default: Date.now},
	valid: Boolean
});

//hash password

userSchema.pre('save', function(next ){
	var user = this;
	if (!user.isModified('password')) return next();
	bcrypt.genSalt(10, function(err, salt){
		if (err) return next(err);
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
		//bcrypt.compare(user.password, this.password);
	});
});

//comparer password to database pass

userSchema.methods.comparePassword = function(password) {
	return bcrypt.compareSync(password, this.password);
}



var User = mongoose.model('User', userSchema);

module.exports = User;