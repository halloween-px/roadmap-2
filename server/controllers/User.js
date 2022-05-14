const User = require('../models/mongo/User');
const list = async (req, res, next) => {
	try {
		res.json({ items: await User.find() });
	} catch (error) {
		next(error);
	}
}

const getById = async (req, res, next) => {
	try {
		res.json({ item: await User.findById(req.params.id) });
	} catch (error) {
		next(error);
	}
}

const create = async (req, res, next) => {
	try {
		delete req.body._id
		const user = new User(req.body);
		await user.save();
		res.json({
			item: user
		})
	} catch (error) {
		next(error);
	}
}

const update = async (req, res, next) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
		res.json({
			item: user
		})
	} catch (error) {
		next(error);
	}
}

module.exports = {
    list, getById, create, update
}