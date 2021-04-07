const express = require('express');
const {getEmployeesCheckCustomerKyiv, getEmployees, deleteEmployee} = require('../../../domain/queries/employees');

const employees = express();

employees
  .get('/', async (req, res, next) => {
    try {
      const data = await getEmployees();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    const {id} = req.params;
    try {
      const data = await deleteEmployee(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .get('/check-customer-kyiv', async (req, res, next) => {
    try {
      const data = await getEmployeesCheckCustomerKyiv();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })

;

module.exports = employees;
