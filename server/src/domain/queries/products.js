const {sequelize} = require('../models');


const getProducts = () => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Products' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
};


const addProduct = (body) => {
  return sequelize.query(
    'INSERT INTO Products (id_product, category_number, product_name, characteristics ) ' +
    `VALUES ("${body.id_product}", "${body.category_number}", "${body.product_name}", "${body.characteristics}" ) ` +
    ';',
    {type: sequelize.QueryTypes.INSERT},
  );
}

const editProduct = (id, body) => {
  return sequelize.query(
    'UPDATE Products  ' +
    `SET id_product = "${body.id_product}", category_number =  "${body.category_number}",
     product_name = "${body.product_name}", characteristics = "${body.characteristics}"  ` +
    `WHERE id_product = ${id} ` +
    ';',
    {type: sequelize.QueryTypes.UPDATE},
  );
}

const deleteProduct = (id) => {
  console.log(id)
  return sequelize.query(
    'DELETE FROM Products WHERE id_product = ' + `'${id}' ` +
    ';',
  );
}


module.exports = {
  getProducts,addProduct, editProduct,deleteProduct
};

