const bcrypt = require('bcrypt');
const Joi = require('joi');
const PopularPlace = require('../models/popularPlace.model');

const popularPlaceSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  province: Joi.string().required(),
  description: Joi.string().required(),
  img1: Joi.string().required(),
  img2: Joi.string().required(),
  img3: Joi.string().required(),
})


module.exports = {
  insert,
  get,
  getAll,
  search,
}

async function insert(popularplace) {
  student = await Joi.validate(popularplace, popularPlaceSchema, { abortEarly: false });
  return await new PopularPlace(popularplace).save();
}

async function get(id) {
  return await PopularPlace.find({sid: id});
}

async function getAll() {
  return await PopularPlace.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await PopularPlace.find(query);
}
