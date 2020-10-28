const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true
  },
  totalPlace: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Place', PlaceSchema);
