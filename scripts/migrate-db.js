'use strict'

const knex = require('../models/db')

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
