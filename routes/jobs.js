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

// get a specific company
router.get("/:id", (req, res) => {
  Job.findById(req.params.id)
    .populate("owner")
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

// get a specific project
router.get("/created/:id", (req, res) => {
  Job.find({owner: req.user._id})
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
router.post("/add", (req, res) => {
  console.log('I am inside of the create')
  const { owner, description, role, position, location, challengeId } = req.body;
  console.log({challengeId})
  console.log('req.body', req.body)
  Job.create({
    owner: req.user._id,
    description,
    role,
    position,
    location,
    challengeId
  })
    .then((job) => {
      console.log('Job created ', job)
      res.status(201).json(job);
    })
    .catch((error) => {
      console.log('Job created failed', job)
      console.log('error', error)

      res.json(error);
    });
});

// update a project
router.put("/:id", (req, res) => {
  const { owner, description, location, position, role } = req.body;
  Job.findByIdAndUpdate(
    req.params.id,
    { owner, description, location, position, role },
    { new: true }
  )
    .then((job) => {
      res.status(200).json(job);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.put("/apply/:id", (req, res) => {
    const userId = req.user._id
    const jobId = req.body.jobId
    console.log({userId})
    console.log(jobId)
    Job.findByIdAndUpdate(
        jobId,
        { appliedUsers: userId},
        { new: true }
    )
        .then((job) => {
            res.status(200).json(job);
        })
        .catch((error) => {
            res.json(error);
        });
});

module.exports = router;
