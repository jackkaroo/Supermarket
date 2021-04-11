const express = require('express');
const {employeeJwtMiddleware, managerMiddleware, sellerMiddleware} = require('../middlewares/auth')

const index = express();

index
  .use(
    '/auth',
    require('./auth'),
  )
  .use(
    '/categories',
    employeeJwtMiddleware,
    require('./categories'),
  )
  .use(
    '/sales',
    employeeJwtMiddleware,
    require('./sales'),
  )
  .use(
    '/checks',
    employeeJwtMiddleware,
    require('./checks'),
  )
  .use(
    '/customers',
    employeeJwtMiddleware,
    require('./customers'),
  )
  .use(
    '/employees',
    employeeJwtMiddleware,
    require('./employees'),
  )
  .use(
    '/products',
    employeeJwtMiddleware,
    require('./products'),
  )
  .use(
    '/store-products',
    employeeJwtMiddleware,
    require('./store-products'),
  )
  .use(
    '/manager',
    employeeJwtMiddleware,
    managerMiddleware,
    require('./manager'),
  )
  .use(
    '/seller',
    employeeJwtMiddleware,
    sellerMiddleware,
    require('./seller'),
  )
;

module.exports = index;
