'use strict'

const fs = require('fs')

const read = fs.createReadStream('.sample-env')
const write = fs.createWriteStream('.env')

read.pipe(write)

