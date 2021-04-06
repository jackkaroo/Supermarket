const {sequelize} = require('../models');

// get names of customers and employees that had checks signed
// by customers with salary over 10 000
// покупці які мають чек з продавцями з зарплатою більше 10 000
const getCustomersHighPaidEmployees = () => {
  return sequelize.query(
    'SELECT DISTINCT (Customer_Cards.card_number), cust_surname, cust_name ' +
    'FROM (Checks INNER JOIN Employees ON Employees.id_employee = Checks.id_employee) ' +
    'INNER JOIN Customer_Cards ON Customer_Cards.card_number = Checks.card_number ' +
    'WHERE Employees.salary > 10000 ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*
Користувачі які підписували чек з усіма працівниками з роллю
seller і тільки з ними*/

const getCustomersCheckWithSeller = () => {
  return sequelize.query(
    'SELECT Customer_Cards.card_number, Customer_Cards.cust_surname, Customer_Cards.cust_name  ' +
    'FROM Customer_Cards ' +
    'WHERE NOT EXISTS ( ' +
    'Select * FROM Checks Where id_employee IN (' +
    'SELECT id_employee From Employees Where role = "seller"' +
    'AND id_employee NOT IN (' +
    'SELECT id_employee From Checks Where Customer_Cards.card_number = Checks.card_number' +
    ') '+
    ')' +
    ')' +
    'AND NOT EXISTS (' +
    'Select * From Checks Where Customer_Cards.card_number = Checks.card_number ' +
    'AND id_employee NOT IN (' +
    'SELECT id_employee From Employees Where role = "seller" ' +
    ')' +
    ')' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

module.exports = {
  getCustomersHighPaidEmployees,getCustomersCheckWithSeller
};


