const db = require("../database/db.js");

const insert_task = db.prepare("INSERT INTO tasks (title) VALUES (?)");

function createTask(title) {
    insert_task.run(title);
}

createTask("Eat a banana")
const tasks = db.prepare("SELECT * FROM tasks").all();
console.log(tasks)

module.exports = { createTask }