var express = require('express');
var router = express.Router();
const db = require("../models/conn")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Takes data from postgres and sends it to console
db.any("SELECT * FROM restaurant WHERE stars = 5;").then(function(response){
  console.log(response);
})

module.exports = router;
