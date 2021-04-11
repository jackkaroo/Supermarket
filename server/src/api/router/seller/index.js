const express = require('express');
const {
  getInfoByCheck,getCustomerInfoBySurname,getPromProductsByQuantity,getPromProductsByName,
  getProductInfoByCheck,getEmployeeInfoById,getProductInfoByUpc,getNotPromProductsByQuantity,
  getNotPromProductsByName
} = require('../../../domain/queries/seller');

const {
  getCustomersByPercent, getProductsByCategorySorted, getAllProducts
} = require('../../../domain/queries/manager');

const seller = express();

seller
.get('/info-by-check/:checkId', async (req, res, next) => {
  try {
    const {checkId} = req.params;
    const data = await getInfoByCheck(checkId);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/info-product-by-check/:checkId', async (req, res, next) => {
  try {
    const {checkId} = req.params;
    const data = await getProductInfoByCheck(checkId);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/customer-info-by-surname/:surname', async (req, res, next) => {
  try {
    const {surname} = req.params;
    const data = await getCustomerInfoBySurname(surname);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/customers-by-percent/:percent', async (req, res, next) => {
  try {
    const {percent} = req.params;
    const data = await getCustomersByPercent(percent);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/products-by-category-sorted/:name', async (req, res, next) => {
  try {
    const {name} = req.params;
    const data = await getProductsByCategorySorted(name);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/products', async (req, res, next) => {
  try {
    const data = await getAllProducts();
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/employee-info-by-id/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = await getEmployeeInfoById(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/info-by-upc/:upc', async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getProductInfoByUpc(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/prom-products-by-quantity', async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getPromProductsByQuantity(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/prom-products-by-name', async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getPromProductsByName(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/not-prom-products-by-quantity', async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getNotPromProductsByQuantity(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/not-prom-products-by-name', async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getNotPromProductsByName(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
;

module.exports = seller;
