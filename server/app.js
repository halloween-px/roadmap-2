require('dotenv').config();
require('./models/mongo/db');
const express = require('express');
const cors = require('cors');
const UserController = require('./controllers/User')
const PostContoller = require('./controllers/Post')
const CommentController = require('./controllers/Comment')

const app = express();
const PORT = 3001;

app.use(express.static("public"));
app.use(cors());
app.use(express.json())

//users
app.get('/users', UserController.list);
app.get('/users/:id', UserController.getById);

app.post('/users', UserController.create);
app.put('/users/:id', UserController.update);

//posts
app.get('/posts', PostContoller.list);
app.get('/posts/:id', PostContoller.getById);

//comments
app.get('/comments', CommentController.list);
app.get('/comments/:id', CommentController.getById);

app.use('*', (req, res) => {
	res.status(404).json({
		message: '404 Not Found',
	});
});

app.use((err, req, res, next) => {
	const { statusCode = 500, message } = err;
	console.log({ err });
	res.status(statusCode).send({
		message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
	});
});


app.listen(PORT, () => {
	console.log(`Server app listening at http://localhost:${PORT}`);
});