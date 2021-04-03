const express = require('express');

const index = express();

index
  .use(
    '/categories',
    require('./categories'),
  )
  .use(
    '/sales',
    require('./sales'),
  )
  .use(
    '/checks',
    require('./checks'),
  )
;

module.exports = index;
