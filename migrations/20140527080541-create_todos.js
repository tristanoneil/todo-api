module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('todos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      done: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
    done();
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('todos');
    done();
  }
}
