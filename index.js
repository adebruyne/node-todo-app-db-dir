require(`dotenv`).config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Configure body-parser to read data sent by HTML form
app.use(bodyParser.urlencoded({ extended: false }));

//Configure body-parser to read JSON data
app.use(bodyParser.json());

const User = require("./models/User");

//Listen for a GET request
app.get("/", (req, res) => {
  console.log("waiting for response");
  User.getAll()
    .then(allUsers => {
      res.send(allUsers);
    })
    .catch(err => {
      res.send({
        message: "What the fork?!"
      });
    });
  //   res.send("Hello Express");
});

app.post();

app.listen(3005, () => {
  console.log("Your express app is ready, freddy.");
});
