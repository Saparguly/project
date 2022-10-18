var express = require('express');
var router = express.Router();
var DatabaseManager = require("../monitoring/DatabaseManager");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/sign_in' );
});
router.post('/stretching', function(req, res, next) {
  if(req.body.login!=undefined && req.body.password!=undefined){
let status = DatabaseManager.getStatus(req.body.login, req.body.password);
if(status=='user')
res.redirect("/stretching")
  else{
    res.redirect('/sign_in');
  }
}});

module.exports = router;
