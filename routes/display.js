var express = require('express');
var router = express.Router();
var path=require('path');

/* GET home page. */


router.post('/', function(req, res, next) {
  
  res.render('display');

});

module.exports = router;
