const db = require("../database/db.js");

const insert_task = db.prepare("INSERT INTO tasks (title) VALUES (?)");

function createTask(title) {
    insert_task.run(title);
}



const readTask = db.prepare(/*sql*/`
SELECT 
id, 
title, 
complete, 
editing, 
importanceLevel
FROM 
tasks
`


)




CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    complete INTEGER,
    editing INTEGER,
    importanceLevel TEXT
);




// createTask("Eat a banana")
// const tasks = db.prepare("SELECT * FROM tasks").all();
// console.log(tasks)

module.exports = { createTask }