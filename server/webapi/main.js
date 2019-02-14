const express = require('express')

const app = express()

const conf = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '3010',
}

app.listen(conf.port, conf.host, () => {
  console.log(`Connected to ${conf.host}:${conf.port}`)
})
