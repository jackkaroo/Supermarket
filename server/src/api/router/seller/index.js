const express = require('express');
const {
  getInfoByCheck,getCustomerInfoBySurname,getPromProductsByQuantity,getPromProductsByName,
  getProductInfoByCheck,getEmployeeInfoById,getProductInfoByUpc,getNotPromProductsByQuantity,
  getNotPromProductsByName,getChecksBySellerByTime
} = require('../../../domain/queries/seller');

const {
  getCustomersByPercent, getProductsByCategorySorted, getAllProducts
} = require('../../../domain/queries/manager');

const {sellerMiddleware} = require('../../middlewares/auth');


const seller = express();

seller
.get('/checks-by-seller-by-time/:surname',sellerMiddleware, async (req, res, next) => {
  try {
    const {surname} = req.params;
    const {dateFrom, dateTo} = req.query;
    console.log(dateFrom, dateTo)
    const data = await getChecksBySellerByTime(surname,dateFrom,dateTo);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/info-by-check/:checkId',sellerMiddleware, async (req, res, next) => {
  try {
    const {checkId} = req.params;
    const data = await getInfoByCheck(checkId);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/info-product-by-check/:checkId',sellerMiddleware, async (req, res, next) => {
  try {
    const {checkId} = req.params;
    const data = await getProductInfoByCheck(checkId);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/customer-info-by-surname/:surname',sellerMiddleware, async (req, res, next) => {
  try {
    const {surname} = req.params;
    const data = await getCustomerInfoBySurname(surname);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/customers-by-percent/:percent',sellerMiddleware, async (req, res, next) => {
  try {
    const {percent} = req.params;
    const data = await getCustomersByPercent(percent);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/products-by-category-sorted/:name',sellerMiddleware, async (req, res, next) => {
  try {
    const {name} = req.params;
    const data = await getProductsByCategorySorted(name);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/products',sellerMiddleware, async (req, res, next) => {
  try {
    const data = await getAllProducts();
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/employee-info-by-id/:id',sellerMiddleware, async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = await getEmployeeInfoById(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/info-by-upc/:upc',sellerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getProductInfoByUpc(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/prom-products-by-quantity',sellerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getPromProductsByQuantity(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/prom-products-by-name',sellerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getPromProductsByName(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/not-prom-products-by-quantity',sellerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getNotPromProductsByQuantity(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/not-prom-products-by-name',sellerMiddleware, async (req, res, next) => {
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
