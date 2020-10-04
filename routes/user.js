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

	const { name, email, description, location, size } = req.body;

	User.findByIdAndUpdate(
		req.params.id,
		{ name, email, description, location, size },
		{ new: true }
	)
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((error) => {
			res.json(error);
		});

});

// update a user
router.put("/:id", (req, res) => {

  const { name, email, description, location, size } = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    { name, email, description, location, size },
    { new: true }
  )
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.json(error);
    });

});
// Bookmark Jobs
router.put("/bookmark/:id", (req, res) => {
	const userId = req.user._id
	const jobId = req.body.jobId

	User.findByIdAndUpdate(
		userId,
		{ bookmarkedJobs: jobId},
		{ new: true }
	)
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
