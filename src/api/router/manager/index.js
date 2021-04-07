const express = require('express');
const { getListSellers, getProductsByCategory } = require('../../../domain/queries/manager');

const manager = express();

manager
.get('/list-sellers', async (req, res, next) => {
  try {
    const data = await getListSellers();
    res.json(data);
  } catch (error) {
    next(error);
  }
})

.get('/products-by-category/:name', async (req, res, next) => {
  try {
    const {name} = req.params;
    const data = await getProductsByCategory(name);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
;

module.exports = manager;
