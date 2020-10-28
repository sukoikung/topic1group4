const Joi = require('joi');
const Tv = require('../models/travel.model');

const epSchema = Joi.object({
    tv: Joi.number().required(),
    titletv: Joi.string().required(),
    detail: Joi.string().required(),
    titleid: Joi.string().required(),
})

module.exports = {
    insert,
    get,
    getAll,
    search,
    delep,
    update,
}

async function deltv(_id){
    return await Tv.deleteOne({_id:_id})
 }

 async function update(_id){
    return await Tv.updateeOne({_id:_id})
 }

async function insert(post) {
    post = await Joi.validate(post, epSchema, { abortEarly: false });
    return await new Tv(post).save();
}

async function update(tv) {
    tv = await Joi.validate(tv, tvSchema, { abortEarly: false });
    tvn =  await Tv.find({tv: tv.tv})
    titletv =  await Tv.find({titletv: ep.titletv})
    detail =  await Tv.find({detail: ep.detail})
    titleid =  await Tv.find({titleid: ep.titleid})

    await Tv.update({_id: ep._id}, tvn, titletv, detail, titleid );
}


async function get(sid) {
    return await Tv.find({titletv: titletv});
}
  
async function getAll() {
    return await Tv.find();
}
  
async function search(key, value) {
    let query = {};
    query[key] = value;
    return await Tv.find(query);
}