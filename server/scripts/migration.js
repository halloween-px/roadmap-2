const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, "../.env")
});
require('../models/mongo/db');
const User = require('../models/mongo/User');
const Post = require('../models/mongo/Post');
const Comment = require('../models/mongo/Comment');

const start = async () => {
   const users = await User.find();

   for(let user of users) {
       const posts = await Post.find({
           userId: user.id
       })
       for(let post of posts) {
           post.userId = user._id;
           await post.save();
           
           const comments = await Comment.find({
               postId: post.id
           })
           for( let comment of comments) {
               comment.postId = post._id;
               comment.save();
           }
       }
   }
   process.exit();
}
start();
