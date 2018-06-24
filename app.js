var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');
var flash=require('connect-flash');
var passport = require('passport');
var mongoose = require('mongoose');
var session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signRouter=require('./routes/signup');
var loginRouter = require('./routes/login');
var uploadedR=require('./routes/uploaded');
var interdataR=require('./routes/interdata');
var initialJ=require('./routes/initial');
var displayR=require('./routes/display');

mongoose.connect('mongodb://localhost/first');
mongoose.Promise=global.Promise;



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);


app.use('/users', usersRouter);
app.use('/signup',signRouter)
app.use('/login',loginRouter);
app.use('/uploaded',uploadedR);
app.use('/interdata',interdataR);
app.use('/initial',initialJ);
app.use('/display',displayR);



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
