var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');
var secret = require('./config/secret');
var MongoStore = require('connect-mongo/es5')(session);
var passport = require('passport');


var routes = require('./routes/index');
//var users = require('./routes/users');
var userRoute = require('./routes/userRoute.js');
var eventRoute = require('./routes/eventRoute.js');
var categoryRoute = require('./routes/categoryRoute.js');
var appelOffreRoute = require('./routes/appelOffreRoute.js');


var app = express();

var dbUri= secret.database;
mongoose.connect(dbUri);

//log connection
mongoose.connection.on('connected', function(){
  console.log('connected to '+dbUri);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: secret.secretKey,
  store: new MongoStore({url : secret.database, autoReconnect: true})
}));

app.use(flash());
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
//app.use('/users', users);
app.use('/user', userRoute);
app.use('/event', eventRoute);
app.use('/category', categoryRoute);
app.use('/appeloffre', appelOffreRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
