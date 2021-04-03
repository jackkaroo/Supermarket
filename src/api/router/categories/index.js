const express = require('express');
const {getCategoryNamesOfStoreProducts} = require('../../../domain/queries/categories');

const categories = express();

categories
  .get('/store-products', async (req, res, next) => {
    try {
      const data = await getCategoryNamesOfStoreProducts();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

module.exports = categories;
