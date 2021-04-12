const express = require('express');
const {
  getCustomersHighPaidEmployees, getCustomersCheckWithSeller,getCustomers,
  addCustomer,editCustomer,deleteCustomer
} = require('../../../domain/queries/customer_cards');

const customers = express();

customers
  .get('/', async (req, res, next) => {
  try {
    const data = await getCustomers();
    res.json(data);
  } catch (error) {
    next(error);
  }
  })
  .post('/', async (req, res, next) => {
    try {

      const data = await addCustomer(req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
    })
  .put('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      console.log(req.body)
      const data = await editCustomer(id,req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const data = await deleteCustomer(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .get('/high-paid-employers', async (req, res, next) => {
    try {
      const data = await getCustomersHighPaidEmployees();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

customers
.get('/check-with-seller', async (req, res, next) => {
  try {
    const data = await getCustomersCheckWithSeller();
    res.json(data);
  } catch (error) {
    next(error);
  }
})
;

module.exports = customers;
