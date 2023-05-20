// ITERATION 3

const isLoggedIn = require("../middlewares/isLoggedIn");
const router = require("express").Router();



router.get("/main", isLoggedIn, (req, res, next) => {
    res.render("main")
})

router.get("/private", isLoggedIn, (req, res, next) => {
    res.render("private")
})



module.exports = router;