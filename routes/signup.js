var express = require('express');

var router = express.Router();
var path=require('path');

/* GET home page. */
router.post('/', function(req, res, next) {
	
 res.download('public/images/nature1.jpg');
});

module.exports = router;
