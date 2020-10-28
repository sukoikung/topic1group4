const express = require('express');
const userRoutes = require('./user.route');
const placeRoutes = require('./place.route');
const popularplaceRoutes = require('./popularplace.route');
const provinceRoutes = require('./province.route');
const commentRoutes = require('./comment.route');
const authRoutes = require('./auth.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/place', placeRoutes);
router.use('/popularplace', popularplaceRoutes);
router.use('/province', provinceRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
