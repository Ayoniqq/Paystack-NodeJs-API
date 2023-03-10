const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8080;
const path = require("path");

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT:${PORT}`); //LISTEN
});
