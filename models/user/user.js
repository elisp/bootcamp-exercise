'use strict'

const joi = require('joi')
const db = require('../db')

const tableName = 'user'

const insertSchema = joi.object({
  id: joi.number().integer().required(),
  login: joi.string().required(),
  avatar_url: joi.string().uri().required(),
  html_url: joi.string().uri().required(),
  type: joi.string().required()
}).required()

async function insert(params) {
  const user = joi.attempt(params, insertSchema)

  return db(tableName)
    .insert(user)
    .returning('*')
    .then((data) => data[0])
}

const readSchema = joi.object({
  id: joi.number().integer(),
  login: joi.string()
})
  .xor('id', 'login')
  .required()

async function read(params) {
  const condition = joi.attempt(params, readSchema)

  return db(tableName)
    .where(condition)
    .select()
    .first()
}

module.exports = {
  tableName,
  insert,
  read
}
