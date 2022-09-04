const Post = require('../models/mongo/Post')
const Comment = require('../models/mongo/Comment')

const list = async (req, res, next) => {
	try {
		const {userId, limit = 20, skip = 0} = req.query;
		res.json({
			count: await Post.countDocuments({userId: userId}),
			items: await Post.find({userId: userId}).limit(+limit).skip(+skip)
		})
	} catch (error) {
		next(error)
	}
}

const getById = async (req, res, next) => {
	try {
		res.json({
			item: await Post.findById(req.params.id)
		})
	} catch (error) {
		next(error)
	}
}

const create = async (req, res, next) => {
	try {
		const post = new Post(req.body)
		post.userId = req.userId;
		await post.save()
		res.json({
			item: post
		})
	} catch (error) {
		next(error)
	}
}

const update = async (req, res, next) => {
	try {
		const post = await Post.findOneAndUpdate({_id: req.params.id, userId: req.userId}, req.body, {new: true});
		res.json({
			item: post
		})
	} catch (error) {
		next(error)
	}
}

const remove = async (req, res, next) => {
	try {
		const count = await Comment.countDocuments({postId: req.params.id});
		if(count > 0) {
			const error = new Error(`Пост не может быть удален, кол-во постов ${count}`);
			error.statusCode = 403;
			return next(error)
		}
		const post = await Post.findByIdAndDelete(req.params.id)
		res.json({
			item: post
		})
	} catch (error) {
		next(error)
	}
}

module.exports = {
    list, getById, create, update, remove
}