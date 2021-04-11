const {sequelize} = require('../models');

/*1.	Скласти список чеків,  видрукуваних даним касиром за певний період часу;*/

const getChecksBySellerByTime = (surname, dateFrom, dateTo) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Checks INNER JOIN Employees ON Employees.id_employee = Checks.id_employee ' +
    `WHERE empl_surname = "${surname}" ` +
    `AND print_date BETWEEN "${dateFrom}" AND "${dateTo}" `  +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*2.	За номером чеку вивести усю інформацію про даний чек.*/
const getInfoByCheck = (checkId) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Checks ' +
    'WHERE check_number = "' + `${checkId}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*3.	Вивести усю інформацію про покупця з певним прізвищем, що має карту клієнта;*/
const getCustomerInfoBySurname = (surname) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Customer_Cards ' +
    'WHERE cust_surname = "' + `${surname}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*9.	За номером чека скласти список усіх товарів, інформація про продаж яких є у цьому чеку;*/
const getProductInfoByCheck = (checkId) => {
  return sequelize.query(
    'SELECT Products.product_name, Products.id_product, Products.category_number, Products.characteristics ' +
    'FROM ((Checks INNER JOIN Sales ON Sales.check_number = Checks.check_number) ' +
    'INNER JOIN Store_Products ON Sales.UPC = Store_Products.UPC) ' +
    'INNER JOIN Products ON Store_Products.id_product = Products.id_product ' +
    'WHERE Checks.check_number = "' + `${checkId}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*10.	За UPC-товару знайти ціну продажу товару, кількість наявних одиниць товару.*/
const getProductInfoByUpc = (upc) => {
  return sequelize.query(
    'SELECT selling_price, products_number ' +
    'FROM Store_Products INNER JOIN Products ON Store_Products.id_product = Products.id_product ' +
    'WHERE Store_Products.UPC = "' + `${upc}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*11.	За ID_працівника знайти всю інформацію про себе.*/
const getEmployeeInfoById = (id) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Employees ' +
    'WHERE id_employee = "' + `${id}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*Скласти список усіх акційних товарів, відсортованих за кількістю одиниць товару/ за назвою;*/
const getPromProductsByQuantity = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Store_Products INNER JOIN Products ON Store_Products.id_product = Products.id_product ' +
    'WHERE promotional_product = "' + `${1}` + '" ' +
    'ORDER BY products_number ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const getPromProductsByName = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Store_Products INNER JOIN Products ON Store_Products.id_product = Products.id_product ' +
    'WHERE promotional_product = "' + `${1}` + '" ' +
    'ORDER BY Products.product_name ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const getNotPromProductsByQuantity = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Store_Products INNER JOIN Products ON Store_Products.id_product = Products.id_product ' +
    'WHERE promotional_product = "' + `${0}` + '" ' +
    'ORDER BY products_number ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const getNotPromProductsByName = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Store_Products INNER JOIN Products ON Store_Products.id_product = Products.id_product ' +
    'WHERE promotional_product = "' + `${0}` + '" ' +
    'ORDER BY Products.product_name ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

module.exports = {
  getInfoByCheck,getCustomerInfoBySurname,getProductInfoByCheck,getEmployeeInfoById,
  getProductInfoByUpc,getPromProductsByName,getPromProductsByQuantity,getNotPromProductsByQuantity,
  getNotPromProductsByName,getChecksBySellerByTime
};

