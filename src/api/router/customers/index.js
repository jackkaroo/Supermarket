const express = require('express');
const {
  getCustomersHighPaidEmployees, getCustomersCheckWithSeller
} = require('../../../domain/queries/customer_cards');

const customers = express();

customers
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
