const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

dotenv.config();
const app = express();
app.use(express.json()); //middleware

connectToDatabase();

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const newTask = new TaskModel(req.body); // criar uma nova task

    await newTask.save(); // salvar no banco.

    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Listening on port: ${8000}!`));
