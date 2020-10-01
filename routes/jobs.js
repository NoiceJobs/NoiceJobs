const express = require("express");
const router = express();
const Job = require("../models/Job");

// get all the projects
router.get("/", (req, res) => {
  Job.find()
    .then((jobs) => {
      res.status(200).json(jobs);
    })
    .catch((error) => {
      res.json(error);
    });
});

// get a specific project
router.get("/:id", (req, res) => {
  Job.findById(req.params.id)
    .then((job) => {
      if (!job) {
        res.status(404).json(job);
      } else {
        res.status(200).json(job);
      }
    })
    .catch((error) => {
      res.json(error);
    });
});

// delete a project
router.delete("/:id", (req, res) => {
  Job.findByIdAndDelete(req.params.id)
    .then((job) => {
      res.status(200).json({ message: "ok" });
    })
    .catch((error) => {
      res.json(error);
    });
});
// create a new project
router.post("/", (req, res) => {
  const { owner, description } = req.body;
  Job.create({
    owner,
    description,
  })
    .then((job) => {
      res.status(201).json(job);
    })
    .catch((error) => {
      res.json(error);
    });
});

// update a project
router.put("/:id", (req, res) => {
  const { owner, description } = req.body;
  Job.findByIdAndUpdate(req.params.id, { owner, description }, { new: true })
    .then((job) => {
      res.status(200).json(job);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;