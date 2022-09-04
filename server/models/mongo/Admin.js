const bcrypt = require('bcrypt');
const { ROLE_ADMIN } = require('../../config');
const saltRounds = 10;
// const { USER_ID, USER_EMAIL, USER_PASSWORD } = require('../config');
const USER_ID = 1;
const USER_EMAIL = process.env.ADMIN_EMAIL;
const USER_PASSWORD = process.env.ADMIN_PASSWORD;

const Admin = {
  findOne: (params) => {
    const { email, id } = params;
    if (!email && !id) {
      return null;
    }
    if (email && email !== USER_EMAIL) {
      return null;
    }
    if (id && id !== USER_ID) {
      return null;
    }
    return {
      _id: USER_ID,
      email: USER_EMAIL,
      role: ROLE_ADMIN,
      password: bcrypt.hashSync(USER_PASSWORD, saltRounds),
    };
  },
};

module.exports = Admin;