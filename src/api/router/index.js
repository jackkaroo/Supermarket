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
  .use(
    '/customers',
    require('./customers'),
  )
  .use(
    '/employees',
    require('./employees'),
  )
  .use(
    '/products',
    require('./products'),
  )
  .use(
    '/store-products',
    require('./store-products'),
  )
;

module.exports = index;
