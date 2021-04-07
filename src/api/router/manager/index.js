const express = require('express');
const {
  getListSellers,
  getProductsByCategory, getCustomersPibPhoneAddress,
  getPhoneAddressByEmployee, getChecksByAllSellerByTime,
  getAllProducts, getInfoByCheck, getCustomersByPercent,
  getAllCategories, getStoreProductsByProduct,
  getPriceQuantityByUPC, getChecksBySellerByTime,
  getInfoByUpc
} = require('../../../domain/queries/manager');

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
  .get('/phone-address-by-employee/:surname', async (req, res, next) => {
    try {
      const {surname} = req.params;
      const data = await getPhoneAddressByEmployee(surname);
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
.get('/categories', async (req, res, next) => {
  try {
    const data = await getAllCategories();
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/store-products-by-product/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = await getStoreProductsByProduct(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/price-quantity-by-upc/:upc', async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getPriceQuantityByUPC(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/checks-by-seller-by-time/:surname', async (req, res, next) => {
  try {
    const {surname} = req.params;
    const data = await getChecksBySellerByTime(surname);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/checks-by-seller-by-time', async (req, res, next) => {
  try {
    const data = await getChecksByAllSellerByTime();
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/info-by-check/:checkId', async (req, res, next) => {
  try {
    const {checkId} = req.params;
    const data = await getInfoByCheck(checkId);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/customers-pib-phone-address', async (req, res, next) => {
  try {
    const data = await getCustomersPibPhoneAddress();
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
.get('/info-by-upc/:upc', async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getInfoByUpc(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})

;

module.exports = manager;
