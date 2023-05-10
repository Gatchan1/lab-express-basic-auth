const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const saltRounds = 14;

router.get("/signup", (req, res, next) => {
    res.render("signup")
  })
  
router.post("/signup", (req, res, next) => {
    // console.log(req.body)
    let {username, password, passwordRepeat} = req.body
    let data = {
      username, password, passwordRepeat
    }
  
    if(username == "" || password == "" || passwordRepeat == "") {
      data.errorMessage = "You can't leave any blank fields"
      res.render("signup", data)
      return;
    } else if (password != passwordRepeat) {
      data.errorMessage = "The passwords should match"
      res.render("signup", data)
      return;
    }
  
    User.find({username})
    .then(users => {
      if(users.length != 0) {
        data.errorMessage = "Username alreadey registered"
        res.render("signup", data)
        return;
      }
    })
    .catch(err => next(err))
  
    //If we have got this far without "falling" in any of the returns, then we are ready to really register our user in the database.
    //(Hi Yabel!)
    //First, let's encrypt the password.

    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordEncrypted = bcrypt.hashSync(password, salt);
  
    // console.log("passw encrypted: ",passwordEncrypted)
    User.create({username, password: passwordEncrypted})
    .then(user => {
        // console.log("user created!!", user)
        res.redirect("/login")
    })
    .catch(err => next(err))
  
  })


  module.exports = router;