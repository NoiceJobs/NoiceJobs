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
        .populate('challengeId')
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

// get a specific SolvedChallenge filtered by jobid challengeid
router.get("/:jobId/:challengeId", (req, res) => {
    console.log();
    SolvedChallenge.find({jobId: req.params.jobId, challengeId:req.params.challengeId, userId: req.user._id})
        .populate('challengeId')
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


// create a new solveChallenge
router.post("/add", (req, res) => {
    const {
        challengeId,
        isSolved,
        userId,
        solution,
        jobId,
    } = req.body;
    console.log(req.body)

    let query = {challengeId, isSolved, userId, solution, jobId},
        update = { expire: new Date() },
        options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // Find the document
    SolvedChallenge.findOneAndUpdate(query, update, options).then((solvedChallenge) => {
        res.status(200).json(solveChallenge);
    }).catch((error) => {
        res.json(error);
    })

    /*SolvedChallenge.create({
        owner: req.user._id,
        title,
        description,
        input,
        output,
    })
        .then((solveChallenge) => {
            res.status(201).json(solveChallenge);
        })
        .catch((error) => {
            res.json(error);
        });*/
});

// update a solvedChallenge
router.put("/:id", (req, res) => {
    const {owner, description, location, position, role} = req.body;
    Challenge.findByIdAndUpdate(
        req.params.id,
        {owner, description, location, position, role},
        {new: true}
    )
        .then((challenge) => {
            res.status(200).json(challenge);
        })
        .catch((error) => {
            res.json(error);
        });
});

module.exports = router;
