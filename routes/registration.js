var express = require('express');
const DatabaseManager = require("../monitoring/DatabaseManager");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('registration');
});
router.post("/", function(req, res, next) {
  if(req.body.login !=undefined && req.body.password !=undefined)
  DatabaseManager.addUser(req.body.login, req.body.password );
    res.redirect('/registration');
  });
module.exports = router;