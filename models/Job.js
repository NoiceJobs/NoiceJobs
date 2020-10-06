const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobSchema = new Schema(
	{
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		appliedUsers: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				unique: true,
			},
		],
		challengeId: {
			type: Schema.Types.ObjectId,
			ref: "Challenge",
		},
		description: String,
		role: {
			type: String,
			enum: ["Junior", "Senior"],
			// default: "Junior",
		} /** Berufseinsteiger,Junior , Senior */,
		position: String,
		location: String,
		/**Created At*/
	},
	{
		timestamps: true,
	}
);
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
