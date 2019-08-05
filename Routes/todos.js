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

module.exports = router;