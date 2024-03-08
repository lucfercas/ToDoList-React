const db = require("../database/db.js");

const insert_task = db.prepare(
  `INSERT INTO todotasks (title) VALUES (?) RETURNING id, title`,
);

function createTask(title) {
  return insert_task.get(title);
}

const select_tasks = db.prepare(/*sql*/ `
SELECT
id,
title,
complete,
editing,
importanceLevel
FROM
todotasks
`);

function listTasks() {
  return select_tasks.all();
}

module.exports = { createTask, listTasks };
