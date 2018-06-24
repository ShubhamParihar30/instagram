
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/final');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const photouser = new Schema({
      like:     [{type: Schema.Types.ObjectId , ref: 'UserDetails' }],/*array of object ids*/
      comment: [{message: String, Comment_name: {type:Schema.Types.ObjectId, ref :'UserDetails'}}],
      username: {type: Schema.Types.ObjectId , ref: 'UserDetails' },/*storing object id of that schema in this array of objects*/
      photo_id: {type: Schema.Types.ObjectId, ref: 'PhotoDetails'} /*storing object id of the uploaded photo */
        
    });
const PhotoDetails = mongoose.model('photodetails', photouser);
module.exports = PhotoDetails;




