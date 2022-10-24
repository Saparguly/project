let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index' );
});
router.post('/exercises', function(req, res, next) {
  res.redirect('/exercises' );
});
router.post('/diet', function(req, res, next) {
  res.redirect('/diet' );
});
router.post('/stretching', function(req, res, next) {
  res.redirect('/stretching' );
});
router.post('/signin', function(req, res, next) {
  res.redirect('/signin' );
});

module.exports = router;
