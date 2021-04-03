const {sequelize} = require('../models');

// all checks of employees
const getChecksOfEmployees = () => {
  return sequelize.query(
    'SELECT Employees.empl_surname, Employees.id_employee, COUNT (DISTINCT (Checks.check_number)) AS checks ' +
    'FROM Checks INNER JOIN Employees ON Employees.id_employee = Checks.id_employee ' +
    'GROUP BY Employees.id_employee' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
};

// all checks of employee with id_employee
const getChecksOfEmployee = (id_employee) => {
  return sequelize.query(
    'SELECT Employees.empl_surname, Employees.id_employee, COUNT (DISTINCT (Checks.check_number)) AS checks ' +
    'FROM Checks INNER JOIN Employees ON Employees.id_employee = Checks.id_employee ' +
    'WHERE Employees.id_employee = ' + `'${id_employee}' ` +
    'GROUP BY Employees.id_employee' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
};

module.exports = {
  getChecksOfEmployees,
  getChecksOfEmployee,
};

