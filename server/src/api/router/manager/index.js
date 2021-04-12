const express = require('express');
const {
  getNotPromProductsByName,
  getNotPromProductsByQuantity,
  getPromProductsByName, getPromProductsByQuantity
} = require('../../../domain/queries/seller');

const {
  getListSellers,getProductsByCategorySorted,
  getProductsByCategory, getCustomersPibPhoneAddress,
  getPhoneAddressByEmployee, getChecksByAllSellerByTime,
  getAllProducts, getInfoByCheck, getCustomersByPercent,
  getAllCategories, getStoreProductsByProduct,getSumProductByTime,
  getPriceQuantityByUPC, getChecksBySellerByTime,
  getInfoByUpc,getSumQuantityProductsBySellerByTime,getSumQuantityProductsByTime
} = require('../../../domain/queries/manager');

const {managerMiddleware} = require('../../middlewares/auth');


const manager = express();

manager
  .get('/list-sellers',managerMiddleware, async (req, res, next) => {
    try {
      const data = await getListSellers();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })

  .get('/products-by-category-sorted/:name',managerMiddleware, async (req, res, next) => {
    try {
      const {name} = req.params;
      const data = await getProductsByCategorySorted(name);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
.get('/products-by-category/:name',managerMiddleware, async (req, res, next) => {
  try {
    const {name} = req.params;
    const data = await getProductsByCategory(name);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
  .get('/phone-address-by-employee/:surname',managerMiddleware, async (req, res, next) => {
    try {
      const {surname} = req.params;
      const data = await getPhoneAddressByEmployee(surname);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .get('/products',managerMiddleware, async (req, res, next) => {
    try {
      const data = await getAllProducts();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
.get('/categories',managerMiddleware, async (req, res, next) => {
  try {
    const data = await getAllCategories();
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/store-products-by-product/:id',managerMiddleware, async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = await getStoreProductsByProduct(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/price-quantity-by-upc/:upc',managerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getPriceQuantityByUPC(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/checks-by-seller-by-time/:surname',managerMiddleware, async (req, res, next) => {
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
.get('/checks-by-seller-by-time',managerMiddleware, async (req, res, next) => {
  try {
    const {dateFrom, dateTo} = req.query;
    const data = await getChecksByAllSellerByTime(dateFrom,dateTo);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/products-sum-by-seller-by-time/:surname',managerMiddleware, async (req, res, next) => {
  try {
    const {surname} = req.params;
    const {dateFrom, dateTo} = req.query;
    const data = await getSumQuantityProductsBySellerByTime(surname,dateFrom,dateTo);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/products-sum-by-time',managerMiddleware, async (req, res, next) => {
  try {
    const {dateFrom, dateTo} = req.query;
    const data = await getSumQuantityProductsByTime(dateFrom,dateTo);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/product-sum-by-time/:id',managerMiddleware, async (req, res, next) => {
  try {
    const {id} = req.params;
    const {dateFrom, dateTo} = req.query;
    const data = await getSumProductByTime(id,dateFrom,dateTo);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/info-by-check/:checkId',managerMiddleware, async (req, res, next) => {
  try {
    const {checkId} = req.params;
    const data = await getInfoByCheck(checkId);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/customers-pib-phone-address',managerMiddleware, async (req, res, next) => {
  try {
    const data = await getCustomersPibPhoneAddress();
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/customers-by-percent/:percent',managerMiddleware, async (req, res, next) => {
  try {
    const {percent} = req.params;
    const data = await getCustomersByPercent(percent);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/info-by-upc/:upc',managerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getInfoByUpc(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/prom-products-by-quantity',managerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getPromProductsByQuantity(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/prom-products-by-name',managerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getPromProductsByName(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/not-prom-products-by-quantity',managerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getNotPromProductsByQuantity(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})
.get('/not-prom-products-by-name',managerMiddleware, async (req, res, next) => {
  try {
    const {upc} = req.params;
    const data = await getNotPromProductsByName(upc);
    res.json(data);
  } catch (error) {
    next(error);
  }
})

;

module.exports = manager;
