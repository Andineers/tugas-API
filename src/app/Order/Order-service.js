const prisma = require('../../libs/prismaClient');

class OrderService {
  static async createOrder(userId, pickupLocation, dropLocation, paymentMethod, totalPrice) {
    const order = await prisma.order.create({
      data: {
        userId,
        pickupLocation,
        dropLocation,
        paymentMethod,
        totalPrice,
      },
    });
    return order;
  }

  static async updateOrderStatus(orderId, status) {
    const order = await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });
    return order;
  }

  static async getOrderHistory(userId) {
    const orders = await prisma.order.findMany({
      where: { userId },
      include: { driver: true },
    });
    return orders;
  }
}

module.exports = OrderService;
