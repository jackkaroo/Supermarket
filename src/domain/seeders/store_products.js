module.exports = async function(db) {
  await db.Store_Product.bulkCreate([
    {
      UPC: 'upc_1',
      UPC_prom: null,
      id_product: 1,
      selling_price: 10,
      products_number: 100,
      promotional_product: false
    },
    {
      UPC: 'upc_2',
      UPC_prom: null,
      id_product: 2,
      selling_price: 20,
      products_number: 200,
      promotional_product: false
    },
    {
      UPC: 'upc_3',
      UPC_prom: null,
      id_product: 3,
      selling_price: 30,
      products_number: 300,
      promotional_product: false
    },
  ]);
};
