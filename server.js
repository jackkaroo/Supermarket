const express = require('express');
const app = require('./src/api/app');
require('./src/domain/connection');
require('./src/domain/models');

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})

app.use(express.static( __dirname + '/client/public' ));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/public/index.html');
})
