let express = require('express');
let router = express.Router();
let DatabaseManager = require("../monitoring/DatabaseManager");

/* GET home page. */

router.get('/stretching', function (req, res, next) {
  if(req.cookies.id!=undefined && req.cookies.id!=None && DatabaseManager.hasAccess(req.cookies.id))
  {
    res.render("stretching");
  }
  else
    res.redirect("/sign_in");
});

module.exports = router;
