var express = require('express');
var router = express.Router();
var path=require('path');
  var UserDetails = require('../routes/initial');

/* GET home page. */


router.post('/', function(req, res, next) {
      
  res.render('login');

});

module.exports = router;
