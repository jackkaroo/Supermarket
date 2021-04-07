const {sequelize} = require('../models');

const getStoreProducts = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Store_Products' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
};


module.exports = {
  getStoreProducts
};

