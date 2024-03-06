const express = require('express');
const router = express.Router();
const db = require('../database/db'); // Adjust the path as necessary

// Get all tasks
router.get('/', (req, res) => {
    const tasks = db.prepare("SELECT * FROM tasks").all();
    res.json(tasks);
});

// Add a new task
router.post('/', (req, res) => {
    const { title } = req.body;
    const insert = db.prepare("INSERT INTO tasks (title) VALUES (?)");
    insert.run(title);
    res.status(201).json({ message: "Task added successfully" });
});

module.exports = router;
