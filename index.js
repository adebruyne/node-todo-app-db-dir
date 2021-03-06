require(`dotenv`).config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//hooks up css
app.use(express.static("public"));

//Configure body-parser to read data sent by HTML form
app.use(bodyParser.urlencoded({ extended: false }));

//Configure body-parser to read JSON data
app.use(bodyParser.json());

const User = require("./models/User");
const page = require("./views/page");
const userList = require(`./views/userList`);
//Listen for a GET request
app.get("/", (req, res) => {
  console.log("waiting for response");
  const thePage = page("hey there");
  res.send(thePage);
  // User.getAll()
  //   .then(allUsers => {
  //     res.send(allUsers);
  //   })
  //   .catch(err => {
  //     res.send({
  //       message: "What the fork?!"
  //     });
  //   });
  //   res.send("Hello Express");
});

app.get("/users", (req, res) => {
  User.getAll()
    .then(allUsers => {
      const usersUL = userList(allUsers);
      console.log(usersUL);
      console.log("conswela?");
      const thePage = page(usersUL);
      res.send(thePage);
    })
    .catch(err => {
      console.log(err);
      res.send({
        message: "What the fork?!"
      });
    });
});
//Listen for POST requests
app.post("/users", (req, res) => {
  //   console.log(req.body);
  //   res.send("ok");
  const newUserName = req.body.name;
  User.add(newUserName).then(theUser => {
    res.send(theUser);
  });
});

//REGular EXpressions
//Update an existing user
//USING POST because HTML Forms can only send GET or POST
//HTML Form cannot send a PUT (or a DELETE)
app.post("/user/:id(\\d+)", (req, res) => {
  const id = req.params.id;
  const newName = req.body.name;
  console.log(id);
  console.log(newName);

  User.getById(id).then(theUser => {
    //call that user's updateName method
    theUser.updateName(newName).then(result => {
      if (result.rowCount === 1) {
        res.send("yeah you did");
      } else {
        res.send("oops");
      }
    });
  });
});

app.listen(3005, () => {
  console.log("Your express app is ready, freddy.");
});
