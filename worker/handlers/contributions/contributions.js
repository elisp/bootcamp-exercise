'use strict'

const Github = require('../../../models/github')
// const User = require('../../../models/user')
// const Repository = require('../../../models/Repository')
const joi = require('joi')

const messageSchema = joi.object({
  date: joi.date(),
  repository: joi.object({
    id: joi.number().integer(),
    full_name: joi.string()
  })
    .xor('id', 'full_name')
    .required()
}).required()

function retriveContributors(params) {
  const contributorDetails = joi.attempt(params, messageSchema)
  Github.api.getContributors(contributorDetails.full_name || contributorDetails.id, contributorDetails.date)
    .then((contributors) => {
      var contrib = contributors[0]
      if (contrib.total > 0) {
        // var weeks = contrib.weeks.filter(week => week.w >=)
      }
    })
}
