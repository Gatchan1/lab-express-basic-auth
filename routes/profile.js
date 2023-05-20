const router = require("express").Router();

router.get("/userProfile", (req,res,next) => {
    const user = req.session.currentUser
    console.log(user)
    res.render("profile", user)
})

module.exports = router;