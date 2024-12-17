const express = require("express");
const router = express.Router();
const customersController = require("./customers.controller");

router.get("/", customersController.getAllCustomers);

module.exports = router;
