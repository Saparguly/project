var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.download('./public/dieta.pdf' );
});
router.post('/', function(req, res, next) {
    res.download('./public/dieta.pdf' );
  });
module.exports = router;
