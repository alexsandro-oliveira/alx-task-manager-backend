const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();
const app = express();

connectToDatabase();

app.get("/tasks", (req, res) => {
  const tasks = [{ description: "estudar programação", isCompleted: false }];
  res.status(200).send(tasks);
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Listening on port: ${8000}!`));
