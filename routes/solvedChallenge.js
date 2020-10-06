const express = require("express");
const router = express();
const SolvedChallenge = require("../models/SolvedChallenge");

// get all the SolvedChallenges
router.get("/", (req, res) => {
	SolvedChallenge.find()
		.then((solvedChallenge) => {
			res.status(200).json(solvedChallenge);
		})
		.catch((error) => {
			res.json(error);
		});
});

// get a specific SolvedChallenge
router.get("/:id", (req, res) => {
	console.log(req.params.id);
	Challenge.findById(req.params.id)
		.then((challenge) => {
			if (!challenge) {
				res.status(404).json(challenge);
			} else {
				res.status(200).json(challenge);
			}
		})
		.catch((error) => {
			res.json(error);
		});
});
// create a new challenge
router.post("/add", (req, res) => {
	const { owner, title, description, input, output } = req.body;
	Challenge.create({
		owner: req.user._id,
		title,
		description,
		input,
		output,
	})
		.then((challenge) => {
			res.status(201).json(challenge);
		})
		.catch((error) => {
			res.json(error);
		});
});

// update a solvedChallenge
router.put("/:id", (req, res) => {
	const { owner, description, location, position, role } = req.body;
	Challenge.findByIdAndUpdate(
		req.params.id,
		{ owner, description, location, position, role },
		{ new: true }
	)
		.then((challenge) => {
			res.status(200).json(challenge);
		})
		.catch((error) => {
			res.json(error);
		});
});

module.exports = router;
