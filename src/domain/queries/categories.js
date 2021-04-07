const {sequelize} = require('../models');

// get names of all categories that have store products
const getCategories = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Categories' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

// get names of all categories that have store products
const getCategoryNamesOfStoreProducts = () => {
  return sequelize.query(
    'SELECT DISTINCT (Categories.category_name) ' +
    'FROM (Categories INNER JOIN Products ON Products.category_number = Categories.category_number) ' +
    'INNER JOIN Store_Products ON Products.id_product = Store_Products.id_product' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

module.exports = {
  getCategoryNamesOfStoreProducts, getCategories
};

