const {sequelize} = require('../models');

/*-	Скласти список працівників, що займають посаду касира, відсортованих за прізвищем;*/
const getListSellers = () => {
  return sequelize.query(
    'SELECT *' +
    'FROM Employees ' +
    'WHERE role="seller" ' +
    'ORDER BY empl_surname ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*-	Скласти список товарів, що належать певній категорії, відсортованих за назвою;*/
const getProductsByCategorySorted = (name) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Categories INNER JOIN Products ON Products.category_number = Categories.category_number ' +
    'WHERE Categories.category_name = ' + `'${name}' ` +
    'ORDER BY product_name ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*-	За прізвищем працівника знайти його телефон та адресу;*/
const getPhoneAddressByEmployee = (surname) => {
  return sequelize.query(
    'SELECT empl_surname, empl_name, phone_number, city, street, zip_code ' +
    'FROM Employees ' +
    'WHERE empl_surname = ' + `'${surname}' ` +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*-	Скласти список усіх товарів, відсортованих за назвою;*/
const getAllProducts = () => {
  return sequelize.query(
    'SELECT *' +
    'FROM Products ' +
    'ORDER BY product_name ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*5.	Скласти список усіх категорій, відсортованих за назвою;*/
const getAllCategories = () => {
  return sequelize.query(
    'SELECT *' +
    'FROM Categories ' +
    'ORDER BY category_name ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*6.	6.	Скласти список всіх товарів, що належать певній категорії:*/
const getProductsByCategory = (name) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Categories INNER JOIN Products ON Products.category_number = Categories.category_number ' +
    'WHERE Categories.category_name = ' + `'${name}' ` +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*7.	Скласти список товарів у магазині, що належать певному товару;*/
const getStoreProductsByProduct = (id) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Store_Products ' +
    'WHERE id_product = ' + `${id}` +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*8.	За UPC-товару знайти ціну продажу товару, кількість наявних одиниць товару.*/
const getPriceQuantityByUPC = (upc) => {
  return sequelize.query(
    'SELECT UPC, selling_price, products_number ' +
    'FROM Store_Products ' +
    'WHERE Store_Products.UPC = "' + `${upc}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*11.	Скласти список чеків, видрукуваних певним касиром за певний період часу
 (з можливістю перегляду куплених товарів, їх к-сті та ціни);*/

const getChecksBySellerByTime = (surname) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Checks INNER JOIN Employees ON Employees.id_employee = Checks.id_employee ' +
    'WHERE empl_surname = "' + `${surname}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*(з можливістю перегляду куплених товарів, їх к-сті та ціни);*/
const getInfoByCheck = (checkId) => {
  return sequelize.query(
    'SELECT Products.product_name, Sales.product_number, Store_Products.selling_price ' +
    'FROM ((Checks INNER JOIN Sales ON Sales.check_number = Checks.check_number) ' +
    'INNER JOIN Store_Products ON Sales.UPC = Store_Products.UPC) ' +
    'INNER JOIN Products ON Store_Products.id_product = Products.id_product ' +
    'WHERE Checks.check_number = "' + `${checkId}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*12.	 Скласти список чеків, видрукуваних усіма касирами за певний період часу
(з можливістю перегляду куплених товарів, їх к-сті та ціни );*/

const getChecksByAllSellerByTime = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Checks ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*16.	Скласти список усіх постійних клієнтів, що мають карту клієнта,
по полях  ПІБ, телефон, адреса (якщо вказана);*/
const getCustomersPibPhoneAddress = () => {
  return sequelize.query(
    'SELECT cust_surname, cust_name, cust_patronymic, phone_number, city, street, zip_code ' +
    'FROM Customer_Cards ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*17.	Скласти список усіх постійних клієнтів, що мають карту клієнта із певним відсотком.*/
const getCustomersByPercent = (percent) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Customer_Cards ' +
    'WHERE percent = "' + `${percent}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

/*18.	За UPC-товару знайти ціну продажу товару,
кількість наявних одиниць товару, назву та характеристики товару.*/
const getInfoByUpc = (upc) => {
  return sequelize.query(
    'SELECT selling_price, products_number, product_name, characteristics ' +
    'FROM Store_Products INNER JOIN Products ON Store_Products.id_product = Products.id_product ' +
    'WHERE Store_Products.UPC = "' + `${upc}` + '"' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}


module.exports = {
  getListSellers, getProductsByCategory, getPhoneAddressByEmployee, getAllProducts, getAllCategories,
  getStoreProductsByProduct, getPriceQuantityByUPC,getChecksBySellerByTime,getInfoByCheck,
  getChecksByAllSellerByTime, getCustomersPibPhoneAddress,getCustomersByPercent,
  getInfoByUpc, getProductsByCategorySorted
};

