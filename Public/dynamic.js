// import { createBrotliDecompress } from "zlib";

$(document).ready(function () {
  $.getJSON("/api/todos")
  .then(addTodos)

  $('#todoInput').keypress(function(event){
    if (event.which == 13){
      createTodo();
    }
  })
});

function addTodos(todos){
  //add todos to page here
  todos.forEach((todo) => {
    var newTodo = $('<li class="task">'=todo.name + '</li>');
    if(newTodo.completed){
      newTodo.addClass("done");
    }
    $(".list").append(newTodo);   
  });
}

function createTodo(params) {
  var usrInput = $('#todoInput').val();
  $.post("/api/todos", {name:usrInput})
  .then(function(newTodo){
    console.log(newTodo);
      })
      .catch((err)=>{console.log(err);
      })
}