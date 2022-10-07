var express = require('express');
var router = express.Router();
var DatabaseManager = require("../manitoring/DatabaseManager");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sign_in');
});
router.post('/sign_in', function(req, res, next) {
  if(req.body.login!=undefined && req.body.password!=undefined){
let status = DatabaseManager.getStatus(req.body.login, req.body.password);
if(status=='user')
res.redirect("/stretching")
  else{
    res.redirect('/sign_in');
  }
}});
module.exports = router ;
