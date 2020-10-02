const express = require("express");
const router = express();
const User = require("../models/User");

// update a user

router.put("/:id", (req, res) => {
  const { name, email, description, location, size } = req.body;
  console.log({ owner }, { description });
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

module.exports = router;
