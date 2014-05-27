var Hapi = require('hapi');
var Server = Hapi.createServer('localhost', 3000, { cors: true });

/*
* Load Models.
*/
var Todo = require('./models/todo');

/*
* Returns all Todos.
*/
Server.route({
  method: 'GET',
  path: '/api/v1/todos',
  handler: function(request, reply) {
    Todo.all().success(function(todos) {
      reply({ todos: todos });
    });
  }
});

/*
* Creates and returns a new Todo.
*/
Server.route({
  method: 'POST',
  path: '/api/v1/todos',
  handler: function(request, reply) {
    Todo.create(request.payload.todo).success(function(todo) {
      reply({ todo: todo });
    });
  }
});

console.log('Starting Todo on port 3000');
Server.start();
