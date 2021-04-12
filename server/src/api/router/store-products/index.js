const express = require('express');
const {
  getStoreProducts, addStoreProduct, editStoreProduct, deleteStoreProduct
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
  .post('/', async (req, res, next) => {
    try {
      const data = await addStoreProduct(req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      console.log(req.body)
      const data = await editStoreProduct(id,req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const data = await deleteStoreProduct(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

module.exports = storeProducts;
