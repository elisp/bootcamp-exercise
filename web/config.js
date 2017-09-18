'use strict'

const joi = require('joi')

const schema = joi.object().keys({
  PORT: joi.number().integer().min(0).max(65535)
    .required()
})
  .unknown().required()

const envVars = joi.attempt(process.env, schema)

const config = {
  port: envVars.PORT,
}

module.exports = config
