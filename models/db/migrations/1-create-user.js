'use strict'

const tableName = 'user'

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments()
    table.string('login', 255).notNullable().unique()
    table.string('avatar_url', 255)
    table.string('html_url', 255)
    table.string('type', 255)
  })
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName)
}

module.exports = {
  up,
  down
}
