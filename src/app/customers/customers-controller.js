const customerService = require("./customers.service");

exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.status(200).json({ success: true, data: customers });
  } catch (error) {
    next(error);
  }
};
