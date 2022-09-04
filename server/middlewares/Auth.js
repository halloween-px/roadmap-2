const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const _sendError = (message = 'Access is denied', status = 403) => {
  const err = new Error(message);
  err.statusCode = status;
  throw err;
};

const userInfo = (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    token = authorization.split(' ')[1];
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (!err) {
      req.userId = decoded.data.id;
    }
    console.log(req.userId);
    next();
  });
};

const isPrivate = (req, res, next) => {
  if (!req.userId) {
    return _sendError('Access is denied');
  }
  next();
};

module.exports = {
  userInfo,
  isPrivate,
};