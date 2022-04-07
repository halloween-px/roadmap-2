const mongoose = require('mongoose');
const CONNECTION = process.env.CONNECTION || 'mongodb://127.0.0.1:27017/WorkflowTools';

mongoose.connect(CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});