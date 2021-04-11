const express = require('express');
const {getCategoryNamesOfStoreProducts, getCategories} = require('../../../domain/queries/categories');

const categories = express();

categories
  .get('/', async (req, res, next) => {
    try {
      const data = await getCategories();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
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
