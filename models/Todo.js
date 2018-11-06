const db = require("./db");

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

// deleteById(7).then(result => {
//   console.log(result.rowCount);
// });

//******************************* */
// updating a row

function updateName(id, name) {
  return db.result(
    `update todos set name=$2
    where id=$1`,
    [id, name]
  );
}
// updateName(3, "feed the raccoons").then(result => {
//   console.log(result)
// });

function updateCompleted(id, didComplete) {
  return db.result(
    `update todos
        set completed=$2
        where id=$1`,
    [id, didComplete]
  );
}

function markCompleted(id) {
  return updateCompleted(id, true);
  //   return db.result(
  //     `update todos
  //         set completed=true
  //         where id=$1`,
  //     [id]
  //   );
}
function markPending(id) {
  return updateCompleted(id, false);
  // return db.result(`update todos
  // set completed=$2
  // where id=$1`, [id, false])
}

// markCompleted(1).then(result => {
//   console.log(result);
// });

module.exports = {
  getAll,
  getById,
  add,
  updateName,
  markCompleted,
  markPending,
  deleteById
};
