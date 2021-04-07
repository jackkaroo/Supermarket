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
const getProductsByCategory = (name) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Categories INNER JOIN Products ON Products.category_number = Categories.category_number ' +
    'WHERE Categories.category_name = ' + `'${name}' ` +
    'ORDER BY product_name ' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}



module.exports = {
  getListSellers, getProductsByCategory
};

