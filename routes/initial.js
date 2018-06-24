
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/first');

const Schema = mongoose.Schema;
const initialuser = new Schema({
      email: String,
      password: String,
      username: String
    });
const UserDetails = mongoose.model('userdetails', initialuser);
module.exports = UserDetails;


