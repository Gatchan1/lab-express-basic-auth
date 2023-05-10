const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const saltRounds = 14;

router.get("/login", (req, res, next) => {

    res.render("login")
})


  module.exports = router;