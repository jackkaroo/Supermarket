const express = require('express');
const {
  getChecksOfEmployees,
  getChecksOfEmployee,
  getChecks
} = require('../../../domain/queries/checks');

const checks = express();

checks
  .get('/', async (req, res, next) => {
    try {
      const data = await getChecks();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .get('/customers', async (req, res, next) => {
    try {
      const data = await getChecksOfEmployees();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .get('/customers/:id_employee', async (req, res, next) => {
    try {
      const {id_employee} = req.params;
      const data = await getChecksOfEmployee(id_employee);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

module.exports = checks;
