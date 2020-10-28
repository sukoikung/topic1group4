const express = require('express');
const asyncHandler = require('express-async-handler');
const popularplaceCtrl = require('../controllers/popularPlace.controller');

const router = express.Router();
module.exports = router;

router.route('/').post(asyncHandler(insert));
router.route('/get/:sid(\d+)').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));

async function insert(req, res) {
  let popularplaces = await popularplaceCtrl.insert(req.body);
  res.json(popularplaces);
}

async function get(req, res) {
  let all_popularplaces = await popularplaceCtrl.get(req.params['sid']);
  res.json(all_popularplaces);
}

async function getAll(req, res) {
  let all_popularplaces = await popularplaceCtrl.getAll();
  res.json(all_popularplaces);
}

async function search(req, res) {
  let result = await popularplaceCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}
