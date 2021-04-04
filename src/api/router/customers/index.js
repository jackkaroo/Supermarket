const express = require('express');
const {
  getCustomersHighPaidEmployees
} = require('../../../domain/queries/customer_cards');

const customers = express();

customers
  .get('/', async (req, res, next) => {
    try {
      const data = await getCustomersHighPaidEmployees();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

module.exports = customers;
