// const pgPromise = require('pg-promise');

const pgp = require("pg-promise")();

const db = pgp({
  host: "localhost",
  port: 5432,
  database: "node-todo-app-db-dir"
});

db.any("select * from todos").then(results => {
  console.log(results);
});
