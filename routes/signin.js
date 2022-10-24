let express = require('express');
let router = express.Router();
let DatabaseManager = require("../monitoring/DatabaseManager");

router.post('/', function (req, res, next) {
  console.log("sign post method works!");
  console.log(req.body);
  if (req.body.login != undefined && req.body.password != undefined) {
    let status = DatabaseManager.getStatus(req.body.login, req.body.password);
    if (status == 'user')
    {
      let cookie = DatabaseManager.setCookieForUser(req.body.login, req.body.password);
      if(cookie!=null)
      {
       res.cookie("id", cookie);
       res.redirect("/stretching");
      }
      else
        res.redirect("/signin");
    }
    else {
      res.redirect('/signin');
    }
  }
  res.redirect("/registration");
});
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.warn("It is work!");
  res.render('sign_in');
});
module.exports = router;
