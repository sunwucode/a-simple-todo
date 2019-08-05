var mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect("mongodb://localhost/todo_list");

mongoose.Promise = Promise;
module.exports.Todo = require("/todo");
