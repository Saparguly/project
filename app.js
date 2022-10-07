var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var sign_inRouter = require('./routes/sign_in');
var sign_upRouter = require('./routes/sign_up');
var dietRouter = require('./routes/diet');
var stretchingRouter = require('./routes/stretching');
var exercisesRouter = require('./routes/exercises');
var downloadRouter = require('./routes/download');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/sign_in', sign_inRouter);
app.use('/sign_up', sign_upRouter);
app.use('/diet', dietRouter);
app.use('/stretching', stretchingRouter);
app.use('/exercises', exercisesRouter);
app.use('/download', downloadRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
