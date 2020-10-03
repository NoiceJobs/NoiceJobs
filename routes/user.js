const express = require("express");
const router = express();
const User = require("../models/User");

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
