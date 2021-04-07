const express = require('express');
const {employeeJwtMiddleware, managerMiddleware} = require('../middlewares/auth')

const index = express();

index
  .use(
    '/auth',
    require('./auth'),
  )
  .use(
    '/categories',
    employeeJwtMiddleware,
    managerMiddleware,
    require('./categories'),
  )
  .use(
    '/sales',
    employeeJwtMiddleware,
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
