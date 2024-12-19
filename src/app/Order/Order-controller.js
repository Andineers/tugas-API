const OrderService = require('./order.service');

class OrderController {
  static async createOrder(req, res) {
    const { pickupLocation, dropLocation, paymentMethod, totalPrice } = req.body;
    const userId = req.user.id; 

    try {
      const order = await OrderService.createOrder(userId, pickupLocation, dropLocation, paymentMethod, totalPrice);
      res.status(201).json({ success: true, order });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateOrderStatus(req, res) {
    const { orderId, status } = req.body;

    try {
      const order = await OrderService.updateOrderStatus(orderId, status);
      res.json({ success: true, order });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getOrderHistory(req, res) {
    const userId = req.user.id;

    try {
      const orders = await OrderService.getOrderHistory(userId);
      res.json({ success: true, orders });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = OrderController;
