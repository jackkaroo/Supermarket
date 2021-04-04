const {sequelize} = require('../models');

// get names of customers and employees that had checks signed by customers with salary over 10 000
const getCustomersHighPaidEmployees = () => {
  return sequelize.query(
    'SELECT DISTINCT (Customer_Cards.cust_surname), Employees.empl_surname ' +
    'FROM (Checks INNER JOIN Employees ON Employees.id_employee = Checks.id_employee) ' +
    'INNER JOIN Customer_Cards ON Customer_Cards.card_number = Checks.card_number ' +
    'WHERE Employees.salary > 10000 ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

module.exports = {
  getCustomersHighPaidEmployees,
};

