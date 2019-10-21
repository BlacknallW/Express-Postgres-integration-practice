const createError = require('http-errors');
var exphbs  = require('express-handlebars');
const express = require('express'),
  app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var hbs = exphbs.create({ /* config */ });

//Imports route files
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Renders index page
app.get('/', function (req, res) {
  res.render('home');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Sets static folder
app.use(express.static(path.join(__dirname, 'public')));

//Sets path to route folders
app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
