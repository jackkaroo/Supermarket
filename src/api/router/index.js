const express = require('express');

const index = express();

index
  .use(
    '/categories',
    require('./categories'),
  )
;

module.exports = index;
