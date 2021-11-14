const express = require("express");
const bodyParser = require("body-parser");

const Asset = require("./models/asset");
const Client = require("./models/client");
const Product = require("./models/product");

const app = express();

const clientRoutes = require("./routes/clients");
//const { Sequelize } = require("sequelize/types");

const sequelize = require("./utils/database");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "Authorization"
  );
  next();
});

app.use("/clients", clientRoutes);

sequelize
  .sync()
  .then((result) => {
    //console.log(result);
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
