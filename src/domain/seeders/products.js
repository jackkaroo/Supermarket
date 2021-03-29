module.exports = async function(db) {
  await db.Prodcut.bulkCreate([
    {
      id_product: 1,
      category_number: 1,
      product_name: 'Adidas Stan Smith',
      characteristics: 'Adidas characteristics'
    },
    {
      id_product: 2,
      category_number: 1,
      product_name: 'Nike Air max',
      characteristics: 'Nike characteristics'
    },
    {
      id_product: 3,
      category_number: 2,
      product_name: 'Levis Cowboy jeans',
      characteristics: 'Levis characteristics'
    },
  ]);
};
