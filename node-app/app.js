const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const mongoose = require("mongoose");
const Todo = require("./todo");
const logger = require("morgan");
const fs = require("fs");
require("dotenv").config();

app.use(express.json());
app.use(logger("dev"));

// GET, POST, PUT ,DELETE,

app.get("/", async function (req, res) {
  const todos = await Todo.find({});
  res.send(todos);
});

app.put("/todos/:todoId", async function (req, res) {
  try {
    if (req.body.task === "") {
      return res.status(400).send("Task is empty");
    }
    const task = req.body.task;
    const todo = await Todo.findOne({ _id: req.params.todoId });
    todo.task = task;
    todo.save();
    res.send(todo);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});
//seeding the database
// const todos = [
//   { task: "Do the laundry 1" },
//   { task: "Do the chores 1" },
//   { task: "Go shopping 1" },
// ];

// Todo.create(todos)
// todos.forEach((todo) => {
//   const a = new Todo(todo);
//   a.save();
// });
// app.get("/", function (req, res) {
//   fs.readFile("./package.json", { encoding: "utf-8" }, function (err, data) {
//     res.send(data);
//   });
// });
// console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI, function (err) {
  if (!err) {
    console.log("connected to db");
  }
});
