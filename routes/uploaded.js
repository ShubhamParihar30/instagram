var express =   require('express');  
var multer  =   require('multer');  
var router =   express.Router();  
var PhotoDetails= require('../routes/photo');
var UserDetails= require('../routes/initial');

var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, 'public/images/uploads');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  } 
});  
var upload = multer({ storage : storage}).single('myfile');  
  
  
router.post('/',function(req,res){  
    upload(req,res,function(err) {  
        if(err) {  
          console.log(err);
            return res.render('login',"Error uploading file.");  
        }  

        PhotoDetails.create(req.body).then(function(photodetails){
           console.log('pata mhi'); res.send(photodetails);
        });  
      
    });  
});  
module.exports = router;
    
  