'use strict'

const logger = require('winston')
const config = require('./config')

// configure logger
logger.default.transports.console.colorize = true
logger.default.transports.console.timestamp = true
logger.default.transports.console.prettyPrint = config.env === 'development'

// start process
logger.info('Starting process', { pid: process.pid, env: config.env })

require('./web')
