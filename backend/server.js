const express = require("express");
const products = require("./data/products");
const dotenv = require("dotenv");
const connectDb = require("./config/config");

// env config
dotenv.config();
// connecting db
connectDb();

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("<h1>Welcome to node server</h1>");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server running on ${process.env.NODE_ENV} mode on ${process.env.PORT}`
  );
});
