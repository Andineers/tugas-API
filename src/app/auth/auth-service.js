const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { prisma } = require('../../libs/prismaClient');

class AuthService {
  static async login(email, password) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('User not found');
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Invalid password');
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }

  static async register(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    return user;
  }
}

module.exports = { AuthService };
