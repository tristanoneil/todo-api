var database = require('../database');

module.exports = database.c.define('Todo', {
  name: {
    type: database.s.STRING,
    notEmpty: true
  },
  url: {
    type: database.s.STRING,
    isUrl: true
  }
}, {
  tableName: 'todos'
});
