const {sequelize} = require('../models');

//
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
};

