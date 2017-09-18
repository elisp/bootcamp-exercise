'use strict'

const app = require('./server')
const config = require('./config')
const logger = require('winston')

const appPort = config.port

logger.info('Server is listening at ', { port: appPort })

app.listen(appPort)
