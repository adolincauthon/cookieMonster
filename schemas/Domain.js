const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cookies: {
    type: [String],
  },
});

module.exports = mongoose.model('Domain', DomainSchema);
