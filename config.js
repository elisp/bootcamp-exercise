'use strict'

const joi = require('joi')
const dotenv = require('dotenv')

dotenv.load()
const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow(['development', 'production', 'test'])
    .default('production')
})
  .unknown()
  .required()

const envVars = joi.attempt(process.env, envVarsSchema)

const config = {
  env: envVars.NODE_ENV
}

module.exports = config
