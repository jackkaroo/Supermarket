const {sequelize} = require('../models');

const getChecks = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Checks ' +
    'ORDER BY check_number' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
};

// all checks of customers
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



const deleteCheck = (id) => {
  return sequelize.query(
    'DELETE FROM Checks WHERE check_number = ' + `'${id}' ` +
    ';',
  );
}

module.exports = {
  getChecksOfEmployees,
  getChecksOfEmployee,
  getChecks,
  deleteCheck
};

