const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const app = express();
const PORT = 3001;

app.use(express.static("public"));
app.use(cors());

//users
app.get('/users', (req, res) => {
	res.json({items:User.list()});
});

app.get('/users/:id', (req, res) => {
	res.json({item:User.getById(+req.params.id)});
});

//posts
app.get('/posts', (req, res) => {
	res.json({items:Post.list(+req.query.userId)});
});

app.get('/posts/:id', (req, res) => {
	res.json({item:Post.getById(+req.params.id)});
});

//comments
app.get('/comments', (req, res) => {
	res.json({items:Comment.list(+req.query.postId)})
});

app.get('/comments/:id', (req, res) => {
	res.json({item:Comment.getById(+req.params.id)})
});


app.listen(PORT, () => {
	console.log(`Server app listening at http://localhost:${PORT}`);
});