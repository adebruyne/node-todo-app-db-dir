require(`dotenv`).config();
const express = require("express");
const app = express();

const User = require("./models/User");

//Listen for a GET request
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3005, () => {
  console.log("Your express app is ready, freddy.");
});
