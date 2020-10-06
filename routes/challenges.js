const express = require("express");
const router = express();
const Challenge = require("../models/Challenge");

// get all the challenges
router.get("/", (req, res) => {
  Challenge.find()
    .then((challenges) => {
      res.status(200).json(challenges);
    })
    .catch((error) => {
      res.json(error);
    });
});

// get a specific challenge
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  Challenge.findById(req.params.id)
    .populate("companyId")
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

// delete a challenge
router.delete("/:id", (req, res) => {
  Challenge.findByIdAndDelete(req.params.id)
    .then((challenge) => {
      res.status(200).json({ message: "ok" });
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

// update a challenge
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
