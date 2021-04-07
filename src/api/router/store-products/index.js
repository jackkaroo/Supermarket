const express = require('express');
const {
  getStoreProducts,
} = require('../../../domain/queries/store-products');

const storeProducts = express();

storeProducts
.get('/', async (req, res, next) => {
  try {
    const data = await getStoreProducts();
    res.json(data);
  } catch (error) {
    next(error);
  }
})
;

module.exports = storeProducts;
