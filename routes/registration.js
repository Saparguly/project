let express = require('express');
const DatabaseManager = require("../monitoring/DatabaseManager");
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  if(req.cookies.id!=undefined && req.cookies.id!=None && DatabaseManager.hasAccess(req.cookies.id))
    res.redirect("/sign_in");
  else
    res.render('registration');
});
router.post("/", function (req, res, next) {
  if (req.body.login != undefined && req.body.password != undefined)
    DatabaseManager.addUser(req.body.login, req.body.password);
  res.redirect('/registration');
});
module.exports = router;