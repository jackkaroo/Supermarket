const {sequelize} = require('../models');

const findEmployeeById = (id) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Employees ' +
    'WHERE Employees.id_employee = ' + `'${id}' ` +
    'LIMIT 1;',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const findEmployeeByEmail = (email) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Employees ' +
    'WHERE Employees.email = ' + `'${email}' ` +
    'LIMIT 1;',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const getEmployees = () => {
  return sequelize.query(
    'SELECT *' +
    'FROM Employees' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const deleteEmployee = (id) => {
  console.log(id)
  return sequelize.query(
    'DELETE FROM Employees WHERE Employees.id_employee = ' + `'${id}' ` +
    ';',
  );
}

const getEmployeesCheckCustomerKyiv = () => {
  return sequelize.query(
    'SELECT Employees.id_employee, empl_surname, empl_name ' +
    'FROM Employees ' +
    'WHERE NOT EXISTS ( ' +
    'Select * FROM Checks Where card_number IN (' +
    'SELECT card_number From Customer_Cards Where city="Kyiv"' +
    'AND card_number NOT IN (' +
    'SELECT card_number From Checks Where Employees.id_employee = Checks.id_employee' +
    ') '+
    ')' +
    ')' +
    'AND NOT EXISTS (' +
    'Select * From Checks Where Employees.id_employee = Checks.id_employee ' +
    'AND Checks.card_number NOT IN (' +
    'SELECT Customer_Cards.card_number From Customer_Cards Where city="Kyiv" ' +
    ')' +
    ')' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

module.exports = {
  getEmployeesCheckCustomerKyiv,
  getEmployees,
  deleteEmployee,
  findEmployeeByEmail,
  findEmployeeById,
};

