module.exports = async function(db) {
  await db.Sale.bulkCreate([
    {
      UPC: 'upc_1',
      check_number: 1,
      product_number: 10,
      selling_price: 10*10, // 10 upc_1 products sold for 10 dollars each
    },
    {
      UPC: 'upc_2',
      check_number: 1,
      product_number: 20,
      selling_price: 20*20,  // 20 upc_2 products sold for 20 dollars each
    },
    {
      UPC: 'upc_3',
      check_number: 2,
      product_number: 30,
      selling_price: 30*30, // 30 upc_3 products sold for 30 dollars each
    },
    {
      UPC: 'upc_3',
      check_number: 3,
      product_number: 40,
      selling_price: 40*30, // 40 upc_3 products sold for 30 dollars each
    },
  ]);
};
