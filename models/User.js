const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		email: String,
		username: String,
		password: String,
		githubId: String,
		name: String,
		description: String,
		language: [String],
		location: String,
		size: Number,
		foundedAt: String,
		linkedInURL: String,
		GithubURL: String,
		appliedJobs: {
			/* This belongs to the applicant */
			type: Schema.Types.ObjectId,
			ref: "Job",
		},
		bookmarkedJobs: {
			/* This belongs to the applicant */
			type: Schema.Types.ObjectId,
			ref: "Job",
		},

		/**? Do we need to reference the  solved Challenge ID*/

		isCompany: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);
module.exports = User;

//not done yet!!
