var express = require("express");
var router = express.Router();
var db = require("../Models");
var helpers = require("../helpers/todos");

//helpers dir created to clean up//
router.route("/", )
.get(helpers.getTodos)
.post(helpers.postTodos)

router.route("/:todoId")
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)

module.exports = router;