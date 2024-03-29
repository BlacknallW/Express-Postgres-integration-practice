const express = require('express');
const es6Renderer = require('express-es6-template-engine')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/restaurantroute');

const app = express();

//Template Engine and views setup
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



module.exports = app;
