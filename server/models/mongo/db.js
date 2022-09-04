const mongoose = require('mongoose');
const {CONNECTION} = require('../../config');

mongoose.connect(CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});