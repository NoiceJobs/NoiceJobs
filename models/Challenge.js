const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const challengeSchema = new Schema({
	companyId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	title: String,
	description: String,
	input: String,
	output: String,
});

const Challenge = mongoose.model("Challenge", challengeSchema);
module.exports = Challenge;
