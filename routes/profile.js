const router = require("express").Router();
const User = require("../models/User.model");

router.get("/userProfile", (req,res,next) => {
    const user = req.session.currentUser
    console.log(user)
    res.render("profile", user)
})

module.exports = router;