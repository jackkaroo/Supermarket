const express = require('express');
const {getCategoryNamesOfStoreProducts, addCategory,
  getCategories, editCategory, deleteCategory } = require('../../../domain/queries/categories');

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
.post('/', async (req, res, next) => {
  try {

    const data = await addCategory(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.put('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    console.log(req.body)
    const data = await editCategory(id,req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = await deleteCategory(id);
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
