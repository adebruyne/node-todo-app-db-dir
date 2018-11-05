// const pgPromise = require('pg-promise');

const pgp = require("pg-promise")();

const db = pgp({
  host: "localhost",
  port: 5432,
  database: "node-todo-app-db-dir"
});

//************************************* */
// grabbing all the rows
function getAll() {
  return db.any("select * from todos");
}
// getAll().then(results => {
//     console.log(results);
//   });

//*********************************** */
//grabbing one row
function getById(id) {
  return db
    .one(`select * from todos where id = ${id}`)

    .catch(err => {
      return {
        name: "No todo found."
      };
    });
}
// getById(2).then(result => {
//   console.log(result);
// });

// ************************************
// add a row
function add(name, completed) {
  return db.result(
    `insert into todos (name,completed)
        values
            ($1, $2)
            returning id`,
    [name, completed]
  );
}

// add("Hydrate!", false)
//   .catch(err => {
//     console.log(err);
//   })
//   .then(result => {
//     console.log(result);
//   });

// *************************************
// deleting a row
function deleteById(id) {
  return db.result(`delete from todos where id=$1`, [id]);
}

deleteById(7).then(result => {
  console.log(result);
});

// updating a row
