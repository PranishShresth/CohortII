const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { TodoSchema } = require("./todo");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  todos: {
    type: [TodoSchema],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
