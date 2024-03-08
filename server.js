const express = require("express");
const app = express();
const cors = require("cors");
const { createTask } = require("./model/tasks.js");

// const tasksRoutes = require('./routes/taskRoutes.js'); // Import tasks routes

app.get("/create", (req, res) => {
  const title = req.body.title;
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors()); // Use CORS to handle cross-origin requests
app.use(express.json()); // Middleware to parse JSON request bodies

// app.use('/tasks', tasksRoutes); // Use tasks routes

app.get("/", (req, res) => {
  res.send("Hello World ");
});

// Endpoint to create a task
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  createTask(title);
  res.status(201).send({ message: "Task created successfully" });
});

// Endpoint to get all tasks
app.get("/tasks", (req, res) => {
  const tasks = db.prepare("SELECT * FROM tasks").all();
  res.status(200).json(tasks);
});

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// module.exports = server;
