const express = require('express');
const User = require('../models/User');
const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.get('/', (req, res) => {
	res.send('Server Index Page!');
});

app.get('/contacts', (req, res) => {
	res.send('8995324235234');
});

app.get('/users', (req, res) => {
	res.json({items:User.list()});
});

app.get('/users/:id', (req, res) => {
	res.json({item:User.getById(+req.params.id)});
});

app.listen(PORT, () => {
	console.log(`Server app listening at http://localhost:${PORT}`);
});