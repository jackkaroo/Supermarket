const express = require('express');
const app = require('./src/api/app');
require('./src/domain/connection');
require('./src/domain/models');

app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:${3001}`)
})

app.use(express.static( __dirname + '/client/build' ));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
})
