exports.up = function (knex) {
    return knex.schema.createTable('Songs', table => {
      table.increments('id')
      table.string('name')
      table.string('song')
      table.integer('score')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Songs')
  }
  