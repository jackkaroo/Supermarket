const {sequelize} = require('../models');

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

module.exports = {
  getInfoByCheck,getCustomerInfoBySurname,getProductInfoByCheck,getEmployeeInfoById,getProductInfoByUpc
};

