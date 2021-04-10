module.exports = async function(db) {
  await db.Store_Product.bulkCreate([
    {
      UPC: 'upc_4',
      UPC_prom: null,
      id_product: 1,
      selling_price: 10 + 10*0.2 + 0.2*(10 + 10*0.2),
      products_number: 200,
      promotional_product: true
    },
    {
      UPC: 'upc_5',
      UPC_prom: null,
      id_product: 2,
      selling_price: 20 + 20*0.2 + 0.2*(20 + 20*0.2),
      products_number: 300,
      promotional_product: true
    },
    {
      UPC: 'upc_1',
      UPC_prom: 'upc_4',
      id_product: 1,
      selling_price: 10 + 10*0.3 + 0.2*(10 + 10*0.3),
      products_number: 100,
      promotional_product: false
    },
    {
      UPC: 'upc_2',
      UPC_prom: 'upc_5',
      id_product: 2,
      selling_price: 20 + 20*0.3 + 0.2*(20 + 20*0.3),
      products_number: 200,
      promotional_product: false
    },
    {
      UPC: 'upc_3',
      UPC_prom: null,
      id_product: 3,
      selling_price: 30 + 30*0.3 + 0.2*(30 + 30*0.3),
      products_number: 300,
      promotional_product: false
    },
  ]);
};
