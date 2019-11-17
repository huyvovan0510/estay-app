var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  phonenumber: {
    type: Number,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
});
var User = mongoose.model('User', UserSchema);
module.exports = User;
