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
  .use(
    '/manager',
    require('./manager'),
  )
  .use(
    '/seller',
    require('./seller'),
  )
;

module.exports = index;
