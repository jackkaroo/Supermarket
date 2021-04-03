module.exports = async function(db) {
  await db.Product.bulkCreate([
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
    {
      id_product: 4,
      category_number: 2,
      product_name: 'Zara Leather Coat',
      characteristics: 'Zara Coat characteristics'
    },
    {
      id_product: 5,
      category_number: 3,
      product_name: 'Granola Vesna',
      characteristics: 'Granola characteristics'
    },
    {
      id_product: 6,
      category_number: 3,
      product_name: 'Milk Soya Alpo',
      characteristics: 'Alpo characteristics'
    },
    {
      id_product: 7,
      category_number: 3,
      product_name: 'Fruit Bread Healthyday',
      characteristics: 'Healthyday characteristics'
    },
  ]);
};
