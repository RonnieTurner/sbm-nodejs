const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const clientRoutes = require("./routes/clients");

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

app.listen(8080);
