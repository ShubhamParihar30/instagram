var express = require('express');
var router = express.Router();
var path=require('path');
var fs=require('fs');
var passport=require('passport');/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index');
});

  /*
  router.post('/login', passport.authenticate('local', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
router.post('/passport', passport.authenticate('local'),
	function(req, res, next){
res.render('login');
	});
*/
module.exports = router;
 