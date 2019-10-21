var express = require('express');
var router = express.Router();
const db = require("../../models/conn")

db.any("SELECT * FROM restaurant WHERE stars = 5;").then(function(response){
    console.log(response);
})
