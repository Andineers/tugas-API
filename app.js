const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  const { name, email, password } = req.body;
  res.json({name, email, password});
});

app.listen(Number(port), () => {
  console.log(`Server is running on port ${port} 🚀`);
});
