let express = require('express');
let router = express.Router();

/* GET home page. */
  router.get('/download', function(req, res, next) {
    res.download('./public/dieta.pdf' );})
module.exports = router;
