const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title:String,
  body:String,
  id:Number,
  userId:Number,
});

const model = mongoose.model('Post', PostSchema, 'posts');

module.exports = model;