const express = require('express');
const {getEmployeesCheckCustomerKyiv, getEmployees,addEmployee,editEmployee,
  deleteEmployee} = require('../../../domain/queries/employees');

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
  .post('/', async (req, res, next) => {
    console.log(req.body)
    try {
      const data = await addEmployee(req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    const {id} = req.params;
    console.log(req.body)
    try {
      const data = await editEmployee(id, req.body);
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
