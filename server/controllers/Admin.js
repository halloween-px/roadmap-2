const Admin = require('../models/mongo/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const EXPIRES = 7 * 24 * 3600000;

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

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return _sendError();
    }

    if (!bcrypt.compareSync(password, admin.password)) {
      return _sendError();
    }

    const cookieExp = Date.now() + EXPIRES;

    const token = jwt.sign(
      {
        exp: Math.floor(cookieExp / 1000),
        data: { id: admin._id, role: admin.role },
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

const logout = (reg, res) => {
  // @todo: add log
  res.send({ success: true });
};

module.exports = {
  login,
  logout,
};