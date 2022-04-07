const Post = require('../models/mongo/Post');

const list =  async (req, res, next) => {
	try {
        const {userId, skip = 0, limit = 10} = req.query;
		res.json({ 
            items: await Post.find({ userId: +userId })
                .skip(+skip)
                .limit(+limit)
        });
	} catch (error) {
		next(error);
	}
}

const getById = async (req, res, next) => {
	try {
		res.json({ item:await Post.findOne({ id: +req.params.id }) });
	} catch (error) {
		next(error);
	}
}

module.exports = {
    list, getById
}