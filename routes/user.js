const express = require("express");
const router = express();
const User = require("../models/User");

router.get("/", (req, res) => {
	User.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((error) => {
			res.json(error);
		});
});

// update a company
router.put("/company/:id", (req, res) => {
	// console.log(req.body, req.params.id);
	const { name, email, description, location, size, linkedInURL, GithubURL } = req.body;

	User.findByIdAndUpdate(req.params.id, { name, email, description, location, size, linkedInURL, GithubURL }, { new: true })
		.then((user) => {
			// console.log(user, "user");
			res.status(200).json(user);
		})
		.catch((error) => {
			// console.log(error, "error");
			res.json(error);
		});
});

// update a user
router.put("/:id", (req, res) => {
	const { name, email, description, location, size , linkedInURL, GithubURL} = req.body;
	// console.log('this is req.body von router.put', req.body)
	// console.log('this is LinkedIn', linkedInURL)
	User.findByIdAndUpdate(req.params.id, { name, email, description, location, size , linkedInURL, GithubURL }, { new: true })
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((error) => {
			res.json(error);
		});
});
// Bookmark Jobs
router.put("/bookmark/:id", (req, res) => {
	const userId = req.user._id;
	const jobId = req.body.jobId;

	User.findByIdAndUpdate(userId, { bookmarkedJobs: jobId }, { new: true })
		.then((bookmarkedJob) => {
			res.status(200).json(job);
		})
		.catch((error) => {
			res.json(error);
		});
});

// get a specific project
router.get("/:id", (req, res) => {
	User.findById(req.params.id)
		.then((user) => {
			if (!user) {
				res.status(404).json(user);
			} else {
				res.status(200).json(user);
			}
		})
		.catch((error) => {
			res.json(error);
		});
});

module.exports = router;
