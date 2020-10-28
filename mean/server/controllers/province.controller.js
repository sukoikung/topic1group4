const bcrypt = require('bcrypt');
const Joi = require('joi');
const Province = require('../models/province.model');

const provinceSchema = Joi.object({
  id: Joi.number().required(),
  province: Joi.number().required(),
  place: {}
  // [{
  //   id: Joi.number().required(),
  //   name: Joi.string().required(),
  //   description: Joi.string().required(),
  //   img1: Joi.string().required(),
  //   img2: Joi.string().required(),
  //   img3: Joi.string().required(),
  // }],
})


module.exports = {
  insert,
  get,
  getAll,
  search,
}

async function insert(province) {
  student = await Joi.validate(province, provinceSchema, { abortEarly: false });
  return await new Province(province).save();
}

async function get(id) {
  return await Province.find({sid: id});
}

async function getAll() {
  return await Province.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Province.find(query);
}
