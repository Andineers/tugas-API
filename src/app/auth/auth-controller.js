const { AuthService } = require('./auth.service');

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const token = await AuthService.login(email, password);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async register(req, res) {
    const { name, email, password } = req.body;
    try {
      const user = await AuthService.register(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = { AuthController };
