const express = require('express');
const { AuthController } = require('../auth/auth.controller');
const { CustomersController } = require('../customers/customers.controller');

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

router.get('/customers', CustomersController.getAllCustomers);
router.get('/customers/:id', CustomersController.getCustomerById);

module.exports = router;
