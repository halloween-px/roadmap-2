require('dotenv').config();
require('./models/mongo/db');
const express = require('express');
const cors = require('cors');
const User = require('./models/mongo/User');
const Post = require('./models/mongo/Post');
const Comment = require('./models/mongo/Comment');
const app = express();
const PORT = 3001;

app.use(express.static("public"));
app.use(cors());

//users
app.get('/users', async (req, res) => {
	res.json({items: await User.find()});
});

app.get('/users/:id', async (req, res) => {
	res.json({item: await User.findOne({id:+req.params.id})});
});

//posts
app.get('/posts', async (req, res) => {
	res.json({items: await Post.find({userId:+req.query.userId})});
});

app.get('/posts/:id', async (req, res) => {
	res.json({item: await Post.findOne({id:+req.params.id})});
});

//comments
app.get('/comments', async (req, res) => {
	res.json({items: await Comment.find({postId:+req.query.postId})})
});

app.get('/comments/:id', async (req, res) => {
	res.json({item: await Comment.findOne({id:+req.params.id})})
});


app.listen(PORT, () => {
	console.log(`Server app listening at http://localhost:${PORT}`);
});