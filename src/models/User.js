// models/user.model.js
import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},

	role: {
		type: String,
		default: "user",
		enum: ["admin", "user"],
	},
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

export default User;