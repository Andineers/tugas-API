const prisma = require("../../libs/prismaClient");

exports.getAllCustomers = () => {
  return prisma.customer.findMany();
};
