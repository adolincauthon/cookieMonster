const mongoose = require('mongoose');

const UserSchemaNew = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
  domains: [{ type: Object }],
});

module.exports = mongoose.model('User', UserSchemaNew);
