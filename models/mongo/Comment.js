const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name:String,
  body:String,
  email:String,
  id:Number,
  postId:Number,
});

const model = mongoose.model('Comment', CommentSchema, 'comments');

module.exports = model;