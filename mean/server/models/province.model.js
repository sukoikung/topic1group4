const mongoose = require('mongoose');

const ProvinceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  province: {
    type: String,
    required: true,
  },
  place: {
    // type: [
    //   {
    //     id: {
    //       type: String,
    //       required: true
    //     },
    //     name: {
    //       type: String,
    //       required: true
    //     },
    //     description: {
    //       type: String,
    //       required: true
    //     },
    //     img1: {
    //       type: String,
    //       required: true
    //     },
    //     img2: {
    //       type: String,
    //       required: true
    //     },
    //     img3: {
    //       type: String,
    //       required: true
    //     },
    //   }
    // ],
    // required: true
  },
}, {
  versionKey: false
});

module.exports = mongoose.model('Province', ProvinceSchema);

