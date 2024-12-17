const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
const authMiddleware = require("./auth.middleware");

router.post("/register", authMiddleware.validateRegister, authController.register);
router.post("/login", authMiddleware.validateLogin, authController.login);

module.exports = router;
