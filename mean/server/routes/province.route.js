const express = require('express');
const asyncHandler = require('express-async-handler');
const provinceCtrl = require('../controllers/province.controller');

const router = express.Router();
module.exports = router;

router.route('/').post(asyncHandler(insert));
router.route('/get/:sid(\d+)').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));

async function insert(req, res) {
  let provinceCtrl = await provinceCtrl.insert(req.body);
  res.json(provinceCtrl);
}

async function get(req, res) {
  let all_province = await provinceCtrl.get(req.params['sid']);
  res.json(all_province);
}

async function getAll(req, res) {
  let all_province = await provinceCtrl.getAll();
  res.json(all_province);
}

async function search(req, res) {
  let result = await provinceCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}
