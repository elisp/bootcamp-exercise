'use strict'

const config = require('../knexfile.js')

const env = 'development'
const knex = require('knex')(config[env])

knex.migrate.latest()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Database synced successfully!')
    process.exit(0)
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err)
    process.exit(1)
  })
