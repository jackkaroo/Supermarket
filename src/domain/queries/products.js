const {sequelize} = require('../models');


const getProducts = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Products' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
};


module.exports = {
  getProducts
};

