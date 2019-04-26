var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Landlord = new Schema({
	landlord_id : String,
	type : Number,
	firstname: String,
	lastname : String,
	email: String,
	DOB : Date,
	psswd : String,
	address : {
		street: String,
		state: String,
		city: String,
		ZipCode: String,
        country: String
    },
    phone : Number,
    ProfilePic : {data : Buffer, contentType : String},
	AvgRating : Number,
	Reviews : [{ratings : Number, feedback : String, trip_id: String, user_id : String}],
	CardData : {
		card : Number,
		initials : String,
		lastname : String,
		cvv : Number,
		ExpiryMonth : Number,
		ExpiryYear : Number,
		country : String
    }
});
module.exports = mongoose.model("Landlord", Landlord);