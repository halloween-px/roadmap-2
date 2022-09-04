const CONNECTION = process.env.CONNECTION || 'mongodb://127.0.0.1:27017/WorkflowTools';

const JWT_SECRET = process.env.JWT_SECRET || '123';

const ROLE_ADMIN = 100;
const ROLE_GUEST = 1;
const ROLE_USER = 2;

const userSettings = {
  ROLE_ADMIN,
  ROLE_GUEST,
  ROLE_USER,
};

module.exports = {
    CONNECTION,
    JWT_SECRET,
  ...userSettings,
};