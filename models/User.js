// ============================================
// Database Connection
const db = require("./db");
// ============================================

// declare a class named "User"
class User {
  //what properties should a user start off with?
  //'constructor is a method that is automatically called when you create a user
  constructor(id, name) {
    //define properties that are also the names of the database columns
    this.id = id;
    this.name = name;
  }

  // ============================================
  // RETRIEVE
  static getAll() {
    return db.any("select * from users");
  }

  static getById(id) {
    return db.one("select * from users where id = $1", [id]).then(result => {
      const u = new User(result.id, result.name);
      return u;
    });
  }
  // ============================================
  // CREATE
  static add(name) {
    return db
      .one(
        `
        insert into users 
            (name)
        values
            ($1)
        returning id    
    `,
        [name]
      )
      .then(id => {
        const u = new User(id, name);
        return u;
      });
  }
  static updateName(id, name) {
    return db.result(
      `
        update users
            set name=$2
        where id=$1
    `,
      [id, name]
    );
  }
  // ============================================
  // DELETE
  deleteById(id) {
    return db.result(
      `
    delete from users
    where id = $1
    `,
      [id]
    );
  }

  // ============================================
}

// ============================================
// UPDATE

module.exports = User;
