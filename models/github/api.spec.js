'use strict'

const nock = require('nock')
const { expect } = require('chai')
const api = require('./api')

describe('Github API', () => {
  it('should search repositories', async () => {
    const githubAPI = nock('https://api.github.com')
      .get('/search/repositories')
      .query({ q: 'language:javascript' })
      .reply(200, {
        items: []
      })

    const result = await api.searchRepositories({ q: 'language:javascript' })
    expect(githubAPI.isDone()).to.eql(true)
    expect(result).to.eql({ items: [] })
  })

  it('should get contributors', async () => {
    const githubAPI = nock('https://api.github.com')
      .get('/repos/testOwner/testRepo/stats/contributors')
      .reply(200, {
        author: {},
        total: 0,
        weeks: []
      })

    const result = await api.getContributors('testOwner/testRepo')
    expect(githubAPI.isDone()).to.eql(true)
    expect(result).to.eql({ author: {}, total: 0, weeks: [] })
  })
})
