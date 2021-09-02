const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const mongoose = require("mongoose");
const Todo = require("./todo");
const fs = require("fs");
require("dotenv").config();

app.use(express.json());

// GET, POST, PUT ,DELETE,

app.get("/", async function (req, res) {
  const todos = await Todo.find({});
  res.send(todos);
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
