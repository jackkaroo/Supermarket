const express = require('express');
const {
  getChecksOfEmployees,
  getChecksOfEmployee,
  getChecks,
  deleteCheck,
} = require('../../../domain/queries/checks');
const {
  createCheckFromSales,
} = require('../../../domain/queries/storeSales');

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
  .post('/', async (req, res, next) => {
    try {
      const data = await createCheckFromSales(req.body, req.employee.id_employee);
      res.json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      const data = await deleteCheck(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

module.exports = checks;
