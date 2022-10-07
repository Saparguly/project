var express = require('express');
const DatabaseManager = require("../manitoring/DatabaseManager");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sign_up');
});
router.post("/", function(req, res, next){
    if(req.body.login_registration!=undefined && req.body.password_registration!=undefined)
    DatabaseManager.addUser(req.body.login_registration, req.body.password_registration );
    res.redirect('/sign_up')
});
module.exports = router;