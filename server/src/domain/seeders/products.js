module.exports = async function(db) {
  await db.Product.bulkCreate([
    {
      id_product: 1,
      category_number: 1,
      product_name: 'Adidas Stan Smith',
      characteristics: 'Stan Smith characteristics'
    },
    {
      id_product: 2,
      category_number: 1,
      product_name: 'Nike Air max',
      characteristics: 'Air max characteristics'
    },
    {
      id_product: 3,
      category_number: 2,
      product_name: 'Levis Cowboy jeans',
      characteristics: 'Cowboy jeans characteristics'
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
      product_name: 'Cheese Brie More',
      characteristics: 'More characteristics'
    },
    {
      id_product: 7,
      category_number: 3,
      product_name: 'Fruit Bread Healthyday',
      characteristics: 'Healthyday characteristics'
    },
    {
      id_product: 8,
      category_number: 4,
      product_name: 'Cider Apps',
      characteristics: 'Cider Apps characteristics'
    },
    {
      id_product: 9,
      category_number: 4,
      product_name: 'Bear Kozel',
      characteristics: 'Bear Kozel characteristics'
    },
    {
      id_product: 10,
      category_number: 5,
      product_name: 'Milk Soya Alpo',
      characteristics: 'Alpo characteristics'
    },
    {
      id_product: 11,
      category_number: 5,
      product_name: 'Lemonade Coca-Cola',
      characteristics: 'Coca-Cola characteristics'
    },
    {
      id_product: 12,
      category_number: 6,
      product_name: 'Loreal Tone Nude',
      characteristics: 'Tone Nude characteristics'
    },
    {
      id_product: 13,
      category_number: 7,
      product_name: 'Shampoo Syoss',
      characteristics: 'Syoss characteristics'
    },
    {
      id_product: 14,
      category_number: 1,
      product_name: 'Nike Air Force',
      characteristics: 'Air Force characteristics'
    },
  ]);
};
