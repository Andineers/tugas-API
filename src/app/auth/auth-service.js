const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../../libs/prismaClient');

class AuthService {
  static async register(name, email, password, role = 'customer') {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    });
    return user;
  }

  static async login(email, password) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('User not found');
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
  }
}

module.exports = AuthService;
