'use strict'

const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'buser',
      password: 'buserpass',
      database: 'bootcamp'
    },
    migrations: {
      directory: path.join(__dirname, '/models/db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/models/db/seeds')
    }
  }

}
