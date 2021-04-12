module.exports = async function(db) {
  await db.Sale.bulkCreate([
    {
      UPC: 'upc_1',
      check_number: 1,
      product_number: 3,
      selling_price: 3120*3,
    },
    {
      UPC: 'upc_2',
      check_number: 1,
      product_number: 5,
      selling_price: 6240*5,
    },
    {
      UPC: 'upc_3',
      check_number: 2,
      product_number: 30,
      selling_price: 2652*30,
    },
    {
      UPC: 'upc_3',
      check_number: 3,
      product_number: 3,
      selling_price: 2652*3,
    },
    {
      UPC: 'upc_1',
      check_number: 4,
      product_number:10,
      selling_price: 3120*10,
    },
    {
      UPC: 'upc_5',
      check_number: 4,
      product_number: 4,
      selling_price: 5760*4,
    },
    {
      UPC: 'upc_9',
      check_number: 4,
      product_number: 20,
      selling_price: 14.04*20,
    },

    {
      UPC: 'upc_19',
      check_number: 5,
      product_number: 3,
      selling_price: 43.2*3,
    },
    {
      UPC: 'upc_11',
      check_number: 6,
      product_number: 1,
      selling_price: 70.2,
    },
    {
      UPC: 'upc_18',
      check_number: 6,
      product_number: 1,
      selling_price: 129.6,
    },
    {
      UPC: 'upc_17',
      check_number: 6,
      product_number: 1,
      selling_price: 6480,
    },
    {
      UPC: 'upc_17',
      check_number: 7,
      product_number: 2,
      selling_price: 6480*2,
    },
    {
      UPC: 'upc_14',
      check_number: 8,
      product_number: 3,
      selling_price: 468*3,
    },

  ]);
};
