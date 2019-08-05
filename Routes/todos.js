var express = require("express");
var router = express.Router();
var db = require("../Models/todo");

router.get("/", function(req, res){
db.Todo.find()
  .then(function(todos){
    res.json(todos);
  })
  .catch(function (err) {
    res.send(err)
  })
});

router.post("/", (req, res)=>{
  db.Todo.create(req.body)
  .then(function(newTodo){
    res.status(201).json(newTodo);
  }) 
  .catch((err)=>{console.log(err);
  })
})

router.get("/:todoId", function (req, res){
  db.Todo.findbyId(req.params.todoId)
  .then(function(foundTodo){
    res.json(foundTodo);
  })
  .catch((err)=>{console.log(err);
  })
})

router.put("/:todoId", function(req, res){
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then(function(todo){
    res.json(todo);
  })
  .catch((err)=>{console.log(err);
  })
})

router.delete("/:todoId", function(req, res){
  db.Todo.remove({_id: req.params.todoId},)
  .then(function(){
    res.json("todo deleted");
  })
  .catch((err)=>{console.log(err);
  })
})

module.exports = router;