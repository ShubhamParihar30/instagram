var express=require('express');
var router=express.Router();
var mongodb=require('mongodb');
var mongoose=require('mongoose');
var UserDetails=require('../routes/initial');
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({ extended: false });

  
router.post('/',
	urlencodedParser, 
	function(req, res) {  
		var response = {"email": req.body.email,"password": req.body.password};
                  
				
         
          UserDetails.create(response).then(function(userdetails){
            console.log("saved");
            res.render('login');
          })
          
                	
	
});
module.exports = router;





