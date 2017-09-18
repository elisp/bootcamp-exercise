'use strict'

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/hello', (ctx) => {
  // ctx.router available
  ctx.body = 'Hello Node.js!'
})

app
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = app
