const express = require('express');
const {
  getSalesOfCustomers,
  getSalesOfCustomer,
} = require('../../../domain/queries/sales');

const sales = express();

sales
  .get('/customers', async (req, res, next) => {
    try {
      const data = await getSalesOfCustomers();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .get('/customers/:card_number', async (req, res, next) => {
    try {
      const {card_number} = req.params;
      const data = await getSalesOfCustomer(card_number);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

module.exports = sales;
