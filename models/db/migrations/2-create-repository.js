'use strict'

const tableName = 'repository'

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments()
    table.integer('owner').unsigned().references('user.id')
    table.string('full_name', 255).notNullable().unique()
    table.string('description', 255)
    table.string('html_url', 255)
    table.string('language', 255)
    table.integer('stargazers_count', 4)
  })
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName)
}

module.exports = {
  up,
  down
}
