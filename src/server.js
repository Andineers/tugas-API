require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const prisma = require('./libs/prismaClient');

const app = express();
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});