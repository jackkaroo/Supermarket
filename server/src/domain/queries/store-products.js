const {sequelize} = require('../models');

const getStoreProducts = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Store_Products' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
};

const addStoreProduct = (body) => {
  return sequelize.query(
    'INSERT INTO Store_Products (UPC, UPC_prom, id_product, selling_price, products_number, promotional_product ) ' +
    `VALUES ("${body.UPC}", ${body.UPC_prom}, "${body.id_product}", "${body.selling_price}", 
     "${body.products_number}", "${body.promotional_product}" ) ` +
    ';',
    {type: sequelize.QueryTypes.INSERT},
  );
}

const editStoreProduct = (id, body) => {
  return sequelize.query(
    'UPDATE Store_Products  ' +
    `SET UPC = "${body.UPC}", UPC_prom =  ${body.UPC_prom},
     id_product = "${body.id_product}", selling_price = "${body.selling_price}", 
     products_number = "${body.products_number}", promotional_product = "${body.promotional_product}"` +
    `WHERE UPC = "${id}" ` +
    ';',
    {type: sequelize.QueryTypes.UPDATE},
  );
}

const deleteStoreProduct = (id) => {
  console.log(id)
  return sequelize.query(
    'DELETE FROM Store_Products WHERE UPC = ' + `'${id}' ` +
    ';',
  );
}


module.exports = {
  getStoreProducts,deleteStoreProduct,editStoreProduct,addStoreProduct
};

