const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//A partir de aquí las rutas que he definido yo:
// SIGN UP
router.get("/signup", (req, res, next) => {
  //la carpeta de new-views es solo para agrupar las que he definido yo
  res.render("new-views/signup")

})




module.exports = router;
