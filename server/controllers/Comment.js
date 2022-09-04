const Comment = require('../models/mongo/Comment');
const list = async (req, res, next) => {
	try {
      const {postId, skip = 0, limit = 6} = req.query;
		res.json({ 
						count: await Comment.countDocuments({postId}),
            items: await Comment.find({ postId: postId }).sort({_id: -1}).skip(+skip).limit(+limit)
        })
	} catch (error) {
		next(error);
	}
}

const getById = async (req, res, next) => {
	try {
		res.json({ item: await Comment.findById(req.params.id) })
	} catch (error) {
		next(error);
	}
}

const create = async (req,res, next) => {
	try {
		const comment = new Comment(req.body);
		comment.save();
		res.json({
			item: comment
		})
	} catch (error) {
		next(error)
	}
}
const remove = async (req, res, next) => {
	try {
		const comment = await Comment.findByIdAndDelete(req.params.id);
		res.json({
			item: comment
		})
	} catch (error) {
		next(error)
	}
}

module.exports = {
    list, getById, create, remove
}