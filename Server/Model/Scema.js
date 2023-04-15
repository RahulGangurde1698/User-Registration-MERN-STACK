const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   

	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
    mob: {
		type: String ,
		required: true,
	},
    last: {
		type: String,
	},
    pass: {
		type: String,
		require:true,
	},
});

module.exports = User = mongoose.model("User", UserSchema);