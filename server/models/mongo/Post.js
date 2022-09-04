const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
  id: Number,
  userId: { 
    type: Schema.Types.ObjectId, 
    required: true 
  },
});

const model = mongoose.model('Post', PostSchema, 'posts');

module.exports = model;