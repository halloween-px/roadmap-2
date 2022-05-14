const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username:{
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  company:{
      name:String
  }
});

const model = mongoose.model('User', UserSchema, 'users');

module.exports = model;