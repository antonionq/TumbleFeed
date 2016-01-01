var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  name: { type: String, maxlength: 50, required: true },
  organization: { type: String, maxlength: 50 },
  email: { type: String, maxlength: 50, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Organization', schema);
