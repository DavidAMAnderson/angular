toDoApp.factory('ToDoFactory', function() {
  // first, we declare the constructor for the model

  Todo = function(todoText, completed){
     this.text = todoText;
     this.completed = (typeof completed !== 'undefined') ? completed : false;
   };

   Todo.prototype.complete = function() {
   this.completed = true;
   };

   return Todo;
})
