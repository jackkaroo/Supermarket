const express = require('express');
const {
  getProducts,addProduct, editProduct,deleteProduct
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
  .post('/', async (req, res, next) => {
    try {
      const data = await addProduct(req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      console.log(req.body)
      const data = await editProduct(id,req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const data = await deleteProduct(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

module.exports = products;
