module.exports = {
  s: require('sequelize'),
  init: function() {
    this.c = new this.s('todo_development', null, null, { dialect: 'postgres' });
    return this;
  }
}.init();
