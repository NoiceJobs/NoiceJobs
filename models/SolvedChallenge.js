const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const solvedChallengeSchema = new Schema({
	challengeId: {
		type: Schema.Types.ObjectId,
		ref: "Challenge",
	},
	isSolved: {
		type: Boolean,
		default: false,
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	solution: String,
});

const SolvedChallenge = mongoose.model("SolvedChallenge", solvedChallengeSchema);
module.exports = SolvedChallenge;
