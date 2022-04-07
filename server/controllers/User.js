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
		res.json({ item: await User.findOne({ id: +req.params.id }) });
	} catch (error) {
		next(error);
	}
}

module.exports = {
    list, getById
}