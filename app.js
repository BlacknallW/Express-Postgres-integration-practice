const es6Renderer  = require("express-es6-template-engine");
const express = require('express'),
  app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


//Imports route files
const indexRouter = require('./routes/index');

//Template Engine setup
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Sets static folder
app.use(express.static(path.join(__dirname, 'public')));

//Sets path to route folders
app.use('/', indexRouter);



module.exports = app;
