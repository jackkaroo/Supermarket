const {sequelize} = require('../models');


const getCustomers = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Customer_Cards ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}


const addCustomer = (body) => {
  return sequelize.query(
    'INSERT INTO Customer_Cards (card_number, cust_surname, cust_name, cust_patronymic, ' +
    'phone_number, city, street, zip_code, percent ) ' +
    `VALUES ("${body.card_number}", "${body.cust_surname}", 
     "${body.cust_name}", "${body.cust_patronymic}", "${body.phone_number}", "${body.city}", 
     "${body.street}", "${body.zip_code}", "${body.percent}" ) ` +
    ';',
    {type: sequelize.QueryTypes.INSERT},
  );
}

const editCustomer = (id, body) => {
  return sequelize.query(
    'UPDATE Customer_Cards  ' +
    `SET card_number = "${body.card_number}", cust_surname = "${body.cust_surname}", 
     cust_name = "${body.cust_name}", cust_patronymic = "${body.cust_patronymic}", phone_number = "${body.phone_number}",
     city = "${body.city}", street = "${body.street}", zip_code = "${body.zip_code}", percent = "${body.percent}"  ` +
    `WHERE card_number = "${id}" ` +
    ';',
    {type: sequelize.QueryTypes.UPDATE},
  );
}

const deleteCustomer = (id) => {
  console.log(id)
  return sequelize.query(
    'DELETE FROM Customer_Cards WHERE card_number = ' + `'${id}' ` +
    ';',
  );
}


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
  getCustomersHighPaidEmployees,getCustomersCheckWithSeller,getCustomers,
  addCustomer,editCustomer,deleteCustomer
};


