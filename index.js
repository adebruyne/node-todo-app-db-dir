require(`dotenv`).config();

const User = require(`./models/User`);

const skyler = new User(`Skyler the Dog`);
const ahjuma = new User(`Ahjuma the Impressive`);

skyler.greet(ahjuma);
ahjuma.greet(skyler);

const Todo = require("./models/Todo");
const User = require("./models/User");

// User.getAll().then(results => {
//   console.log(results);
// });

// Todo.getAll().then(results => {
//   console.log(results);
// });

// Todo.getById(2).then(result => {
//   console.log(result);
// });

// Todo.add("Hydrate!", false)
//   .catch(err => {
//     console.log(err);
//   })
//   .then(result => {
//     console.log(result);
//   });

// Todo.deleteById(7).then(result => {
//   console.log(result.rowCount);
// });

// Todo.updateName(3, "feed the raccoons").then(result => {
//   console.log(result);
// });

// Todo.markCompleted(1).then(result => {
//   console.log(result);
// });
