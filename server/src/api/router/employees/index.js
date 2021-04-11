const express = require('express');
const {getEmployeesCheckCustomerKyiv, getEmployees,addEmployee,
  deleteEmployee} = require('../../../domain/queries/employees');
const {Employee} = require('../../../domain/models');

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
      const data = await Employee.create(req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    const {id} = req.params;
    console.log(req.body)
    try {
      const data = await Employee.update(req.body, {where: {id_employee:id}});
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
