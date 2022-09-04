const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  body:String,
  email:String,
  id:Number,
  postId:{
    type: Schema.Types.ObjectId,
    required: true
  }
});

const model = mongoose.model('Comment', CommentSchema, 'comments');

module.exports = model;