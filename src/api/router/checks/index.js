const express = require('express');
const {
  getChecksOfEmployees,
  getChecksOfEmployee,
} = require('../../../domain/queries/checks');

const checks = express();

checks
  .get('/employees', async (req, res, next) => {
    try {
      const data = await getChecksOfEmployees();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
  .get('/employees/:id_employee', async (req, res, next) => {
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
