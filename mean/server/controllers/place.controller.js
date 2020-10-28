const bcrypt = require('bcrypt');
const Joi = require('joi');
const Place = require('../models/place.model');

const placeSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  img: Joi.string().required(),
  totalPlace: Joi.string().required()
})


module.exports = {
  insert,
  get,
  getAll,
  search,
}

async function insert(place) {
  student = await Joi.validate(place, placeSchema, { abortEarly: false });
  return await new Place(place).save();
}

async function get(id) {
  return await Place.find({sid: id});
}

async function getAll() {
  return await Place.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Place.find(query);
}
