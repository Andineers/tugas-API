const express = require('express');
const OrderController = require('./order.controller');
const router = express.Router();
const authGuard = require('../../middleware/authGuard');

router.post('/create', authGuard, OrderController.createOrder);
router.put('/update-status', authGuard, OrderController.updateOrderStatus);
router.get('/history', authGuard, OrderController.getOrderHistory);

module.exports = router;
