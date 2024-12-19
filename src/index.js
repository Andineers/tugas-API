const express = require('express');
const authRoutes = require('../app/auth/auth.routes');
const orderRoutes = require('../app/orders/order.routes');
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
