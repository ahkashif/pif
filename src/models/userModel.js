import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "Pease provide a username"],
			unique: false,
		},
		email: {
			type: String,
			required: [true, "Pease provide a email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Pease provide a password"],
			unique: true,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		forgotPasswordToken: String,
		forgotPasswordTokenExpiry: Date,
		verifyToken: String,
		verifyTokenExpiry: Date,
	},
	{ collection: "users" }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
