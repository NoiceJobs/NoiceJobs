const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});





/*TODO Contact Page*/
router.route('/contact')
    .get((req, res, next) => {

    })
    .post((req, res, next) => {

    })

module.exports = router;
