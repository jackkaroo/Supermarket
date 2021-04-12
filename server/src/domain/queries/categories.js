const {sequelize} = require('../models');

// get names of all categories that have store products
const getCategories = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Categories ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const addCategory = (body) => {
  return sequelize.query(
    'INSERT INTO Categories (category_name ) ' +
    `VALUES ("${body.category_name}" ) ` +
    ';',
    {type: sequelize.QueryTypes.INSERT},
  );
}

const editCategory = (id, body) => {
  return sequelize.query(
    'UPDATE Categories  ' +
    `SET category_name = "${body.category_name}"  ` +
    `WHERE category_number = ${id} ` +
    ';',
    {type: sequelize.QueryTypes.UPDATE},
  );
}

const deleteCategory = (id) => {
  console.log(id)
  return sequelize.query(
    'DELETE FROM Categories WHERE category_number = ' + `'${id}' ` +
    ';',
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
  getCategoryNamesOfStoreProducts, getCategories, addCategory, editCategory, deleteCategory
};

