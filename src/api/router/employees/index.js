const express = require('express');
const {getEmployeesCheckCustomerKyiv} = require('../../../domain/queries/employees');

const employees = express();

employees
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
