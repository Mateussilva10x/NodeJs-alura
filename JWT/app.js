const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { estrategiasAutenticaco } = require("./src/usuarios");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

module.exports = app;
