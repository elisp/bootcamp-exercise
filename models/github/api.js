'use strict'

const rp = require('request-promise-native')


function searchRepositories(query = {}) {
  const options = {
    uri: 'https://api.github.com/search/repositories',
    method: 'GET',
    qs: query,
    json: true
  }
  return rp(options)
}

function getContributors(repository, query = {}) {
  const options = {
    uri: `https://api.github.com/repos/${repository}/stats/contributors`,
    method: 'GET',
    qs: query,
    json: true
  }
  return rp(options)
}

module.exports = {
  searchRepositories,
  getContributors
}
