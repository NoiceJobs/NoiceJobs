const express = require("express");
const router = express();
const Job = require("../models/Job");
const User = require("../models/User");

// get all the projects
router.get("/", (req, res) => {
    Job.find()
        .populate("owner")
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
    Job.find({ owner: req.user._id })
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
    console.log("I am inside of the create");
    const {
        owner,
        description,
        role,
        position,
        location,
        challengeId,
    } = req.body;
    console.log({ challengeId });
    console.log("req.body", req.body);
    Job.create({
        owner: req.user._id,
        description,
        role,
        position,
        location,
        challengeId,
    })
        .then((job) => {
            console.log("Job created ", job);
            res.status(201).json(job);
        })
        .catch((error) => {

            console.log("error", error);

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
    console.log("Bin drinne");
    const userId = req.user._id;
    const jobId = req.body.jobId;
    console.log("userId", userId);
    console.log("jobId", jobId);
    Job.findByIdAndUpdate(jobId, { $push: { appliedUsers: userId } }, { new: true })
        .then((job) => {
            res.status(200).json(job);
        })
        .catch((error) => {
            console.log(error);
            res.json(error);
        });
});

// get a specific project with all the applied applicant
router.get("/applied/applicant", (req, res) => {
    Job.find({ owner: req.user._id })
        .populate("appliedUsers")
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

//get the jobs an applicant applied to
// router.get("/applied/jobs", (req, res) => {
//   console.log('This uhfauhfuahgfuahfuarhgiuarehiuaerhg', req)
//   Job.find({ appliedJobs: req. })
//     .populate("appliedJobs")
//     .then((job) => {
//       if (!job) {
//         res.status(404).json(user);
//       } else {
//         res.status(200).json(user);
//       }
//     })
//     .catch((error) => {
//       res.json(error);
//     });
// });



module.exports = router;


