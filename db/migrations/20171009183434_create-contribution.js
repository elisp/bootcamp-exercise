'use strict'

const tableName = 'contribution'

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.integer('user').unsigned().references('user.id')
    table.integer('repository').unsigned().references('repository.id')
    table.integer('line_count', 4)
  })
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName)
}

module.exports = {
  up,
  down
}
