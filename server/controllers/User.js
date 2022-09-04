const User = require('../models/mongo/User');
const Post = require('../models/mongo/Post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, ROLE_USER } = require('../config');
const saltRounds = 10;
const EXPIRES = 7 * 24 * 3600000;
const list = async (req, res, next) => {
	try {
		const { skip = 0, limit = 10 } = req.query;
		res.json({
			count: await User.countDocuments(),
			items: await User.find().skip(+skip).limit(+limit)
		});
	} catch (error) {
		next(error);
	}
}

const getById = async (req, res, next) => {
	try {
		res.json({
			item: await User.findById(req.params.id)
		})
	} catch (error) {
		next(error)
	}
}

const create = async (req, res, next) => {
	try {
		delete req.body._id
		const user = new User({ 
			...req.body,
			 password: bcrypt.hashSync(req.body.password, saltRounds),
			 role: ROLE_USER, 
		})
		await user.save()
		res.json({
			item: user
		})
	} catch (error) {
		next(error)
	}
}

const update = async (req, res, next) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.json({
			item: user
		})
	} catch (error) {
		next(error);
	}
}

const remove = async (req, res, next) => {
	try {
		const count = await Post.countDocuments({ userId: req.params.id });
		if (count > 0) {
			const error = new Error(`Пользователь не может быть удален кол-во постов ${count}`)
			error.statusCode = 403;
			return next(error);
		}
		const user = await User.findByIdAndDelete(req.params.id);
		res.json({
			item: user
		})
	} catch (error) {
		next(error)
	}
}

const _sendError = (message = 'Invalid email/password!!!', status = 400) => {
	const err = new Error(message);
	err.statusCode = status;
	throw err;
};

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return _sendError();
		}

		const user = await User.findOne({ email });

		if (!user) {
			return _sendError();
		}

		if (!bcrypt.compareSync(password, user.password)) {
			return _sendError();
		}

		const cookieExp = Date.now() + EXPIRES;

		const token = jwt.sign(
			{
				exp: Math.floor(cookieExp / 1000),
				data: { id: user._id, role: user.role },
			},
			JWT_SECRET
		);

		res.json({
			success: true,
			expires: Math.floor(cookieExp / 1000),
			token,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = {
	list, getById, create, update, remove, login
}