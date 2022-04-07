const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:String,
  email:String,
  id:Number,
  username:String,
  company:{
      name:String
  }
});

const model = mongoose.model('User', UserSchema, 'users');

module.exports = model;