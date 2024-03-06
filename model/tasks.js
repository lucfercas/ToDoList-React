const db = require("../database/db.js");

const insert_task = db.prepare(
  `INSERT INTO todotasks (title) VALUES (?) RETURNING id, title`,
);

function createTask(title) {
  return insert_task.get(title);
}

const result = createTask("send flower");
console.log(result);

// const readTask = db.prepare(/*sql*/ `
// SELECT
// id,
// title,
// complete,
// editing,
// importanceLevel
// FROM
// todotasks
// `);

module.exports = { createTask };
