const express = require('express');
const {
  getProducts,
} = require('../../../domain/queries/products');

const products = express();

products
  .get('/', async (req, res, next) => {
    try {
      const data = await getProducts();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

module.exports = products;
