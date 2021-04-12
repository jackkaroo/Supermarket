module.exports = async function(db) {
  await db.Store_Product.bulkCreate([
    {
      UPC: 'upc_4',
      UPC_prom: null,
      id_product: 1,
      selling_price: 2000 + 2000*0.2 + 0.2*(2000 + 2000*0.2),
      products_number: 20,
      promotional_product: true
    },
    {
      UPC: 'upc_5',
      UPC_prom: null,
      id_product: 2,
      selling_price: 4000 + 4000*0.2 + 0.2*(4000 + 4000*0.2),
      products_number: 10,
      promotional_product: true
    },
    {
      UPC: 'upc_1',
      UPC_prom: 'upc_4',
      id_product: 1,
      selling_price: 2000 + 2000*0.3 + 0.2*(2000 + 2000*0.3),
      products_number: 100,
      promotional_product: false
    },
    {
      UPC: 'upc_2',
      UPC_prom: 'upc_5',
      id_product: 2,
      selling_price: 4000 + 4000*0.3 + 0.2*(4000 + 4000*0.3),
      products_number: 70,
      promotional_product: false
    },
    {
      UPC: 'upc_20',
      UPC_prom: null,
      id_product: 3,
      selling_price: 1700 + 1700*0.2 + 0.2*(1700 + 1700*0.2),
      products_number: 50,
      promotional_product: true
    },
    {
      UPC: 'upc_3',
      UPC_prom: 'upc_20',
      id_product: 3,
      selling_price: 1700 + 1700*0.3 + 0.2*(1700 + 1700*0.3),
      products_number: 150,
      promotional_product: false
    },
    {
      UPC: 'upc_6',
      UPC_prom: null,
      id_product: 4,
      selling_price: 2500 + 2500*0.3 + 0.2*(2500 + 2500*0.3),
      products_number: 50,
      promotional_product: false
    },
    {
      UPC: 'upc_7',
      UPC_prom: null,
      id_product: 5,
      selling_price: 25 + 25*0.3 + 0.2*(25 + 25*0.3),
      products_number: 150,
      promotional_product: false
    },
    {
      UPC: 'upc_8',
      UPC_prom: null,
      id_product: 6,
      selling_price: 70 + 70*0.3 + 0.2*(70 + 70*0.3),
      products_number: 55,
      promotional_product: false
    },
    {
      UPC: 'upc_9',
      UPC_prom: null,
      id_product: 7,
      selling_price: 9 + 9*0.3 + 0.2*(9 + 9*0.3),
      products_number: 170,
      promotional_product: false
    },
    {
      UPC: 'upc_19',
      UPC_prom: null,
      id_product: 8,
      selling_price: 30 + 30*0.2 + 0.2*(30 + 30*0.2),
      products_number: 100,
      promotional_product: true
    },
    {
      UPC: 'upc_10',
      UPC_prom: 'upc_19',
      id_product: 8,
      selling_price: 30 + 30*0.3 + 0.2*(30 + 30*0.3),
      products_number: 300,
      promotional_product: false
    },
    {
      UPC: 'upc_11',
      UPC_prom: null,
      id_product: 9,
      selling_price: 45 + 45*0.3 + 0.2*(45 + 45*0.3),
      products_number: 120,
      promotional_product: false
    },
    {
      UPC: 'upc_18',
      UPC_prom: null,
      id_product: 10,
      selling_price: 90 + 90*0.2 + 0.2*(90 + 90*0.2),
      products_number: 20,
      promotional_product: true
    },
    {
      UPC: 'upc_12',
      UPC_prom: 'upc_18',
      id_product: 10,
      selling_price: 90 + 90*0.3 + 0.2*(90 + 90*0.3),
      products_number: 170,
      promotional_product: false
    },
    {
      UPC: 'upc_22',
      UPC_prom: null,
      id_product: 11,
      selling_price: 10 + 10*0.2 + 0.2*(10 + 10*0.2),
      products_number: 150,
      promotional_product: true
    },
    {
      UPC: 'upc_13',
      UPC_prom: 'upc_22',
      id_product: 11,
      selling_price: 10 + 10*0.3 + 0.2*(10 + 10*0.3),
      products_number: 200,
      promotional_product: false
    },
    {
      UPC: 'upc_14',
      UPC_prom: null,
      id_product: 12,
      selling_price: 300 + 300*0.3 + 0.2*(300 + 300*0.3),
      products_number: 80,
      promotional_product: false
    },
    {
      UPC: 'upc_21',
      UPC_prom: null,
      id_product: 13,
      selling_price: 120 + 120*0.2 + 0.2*(120 + 120*0.2),
      products_number: 90,
      promotional_product: true
    },
    {
      UPC: 'upc_15',
      UPC_prom: 'upc_21',
      id_product: 13,
      selling_price: 120 + 120*0.3 + 0.2*(120 + 120*0.3),
      products_number: 130,
      promotional_product: false
    },
    {
      UPC: 'upc_17',
      UPC_prom: null,
      id_product: 14,
      selling_price: 4500 + 4500*0.2 + 0.2*(4500 + 4500*0.2),
      products_number: 10,
      promotional_product: true
    },
    {
      UPC: 'upc_16',
      UPC_prom: 'upc_17',
      id_product: 14,
      selling_price: 4500 + 4500*0.3 + 0.2*(4500 + 4500*0.3),
      products_number: 80,
      promotional_product: false
    },
  ]);
};
