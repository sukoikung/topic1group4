const express = require('express');
const asyncHandler = require('express-async-handler');
const placeCtrl = require('../controllers/place.controller');

const router = express.Router();
module.exports = router;

router.route('/').post(asyncHandler(insert));
router.route('/get/:sid(\d+)').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));

async function insert(req, res) {
  let place = await placeCtrl.insert(req.body);
  res.json(place);
}

async function get(req, res) {
  let all_places = await placeCtrl.get(req.params['sid']);
  res.json(all_places);
}

async function getAll(req, res) {
  let all_places = await placeCtrl.getAll();
  res.json(all_places);
}

async function search(req, res) {
  let result = await placeCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}
