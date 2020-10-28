const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  place_name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  versionKey: false
});

module.exports = mongoose.model('Comment', CommentSchema);

