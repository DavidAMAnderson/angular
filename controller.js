
toDoApp.controller('ToDoController', function() {
  // Save this to a variable as this can change depending on the context of
  // where it is being called, see
  // https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y032
  var self = this;

  self.todos = [{ task: "ToDo1", completed: true }, { task: "ToDo2", completed: false }];

  self.addToDo = function(todoText) {
    self.todos.push({ task: todoText, completed: false });
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

});
