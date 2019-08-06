var db = require("../Models");

exports.getTodos = function(req, res){
  db.Todo.find(req.body)
    .then(function(todos){
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err)
    })
  };

  exports.postTodos = (req, res)=>{
    db.Todo.save()
    .then(function(newTodo){
      res.status(201).json(newTodo);
    }) 
    .catch((err)=>{console.log(err);
    })
  };  

  exports.getTodo = function (req, res){
    db.Todo.findbyId(req.params.todoId)
    .then(function(foundTodo){
      res.json(foundTodo);
    })
    .catch((err)=>{console.log(err);
    })
  };

  exports.updateTodo = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
      res.json(todo);
    })
    .catch((err)=>{console.log(err);
    })
  };

  exports.deleteTodo = function(req, res){
    db.Todo.remove({_id: req.params.todoId},)
    .then(function(){
      res.json("todo deleted");
    })
    .catch((err)=>{console.log(err);
    })
  };

module.exports = exports;