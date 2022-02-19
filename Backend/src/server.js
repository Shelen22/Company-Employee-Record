const express = require("express");
const connect = require("./config/db");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


const start = async () => {
  await connect();
  app.listen(2244, () => {
    console.log("Server is Running on 2244");
  });
};

module.exports = { app, start };
