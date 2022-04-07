const Comment = require('../models/mongo/Comment');
const list = async (req, res, next) => {
	try {
        const {postId, skip = 0, limit = 10} = req.query;
		res.json({ 
            items: await Comment.find({ postId: +postId })
                .skip(+skip)
                .limit(+limit)
        })
	} catch (error) {
		next(error);
	}
}

const getById = async (req, res, next) => {
	try {
		res.json({ item: await Comment.findOne({ id: +req.params.id }) })
	} catch (error) {
		next(error);
	}
}

module.exports = {
    list, getById
}