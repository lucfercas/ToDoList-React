const express = require('express');
const app = express();
const cors = require('cors');
const { createTask } = require('../model/tasks.js'); 

app.use(cors()); // Use CORS to avoid cross-origin issues
app.use(express.json()); // Middleware to parse JSON bodies

// Endpoint to create a task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  createTask(title);
  res.status(201).send({ message: "Task created successfully" });
});

// Endpoint to get all tasks
app.get('/tasks', (req, res) => {
  const tasks = db.prepare("SELECT * FROM tasks").all();
  res.status(200).json(tasks);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;