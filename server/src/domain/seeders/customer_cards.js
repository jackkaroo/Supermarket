module.exports = async function(db) {
  await db.Customer_Card.bulkCreate([
    {
      card_number: 'card_number_1',
      cust_surname: 'Kolesnyk',
      cust_name: 'Max',
      cust_patronymic: 'Artemovich',
      phone_number: '+380958091390',
      city: 'Kyiv',
      street: 'Myshugi 3',
      zip_code: '2140',
      percent: 1,
    },
    {
      card_number: 'card_number_2',
      cust_surname: 'Gorulya',
      cust_name: 'Katya',
      cust_patronymic: 'Igorivna',
      phone_number: '+380990139635',
      city: 'Kyiv',
      street: 'Radunska 2',
      zip_code: '2140',
      percent: 2,
    },
    {
      card_number: 'card_number_3',
      cust_surname: 'Zila',
      cust_name: 'Dima',
      cust_patronymic: 'Mihailovich',
      phone_number: '+380956782331',
      city: 'Mikolaiv',
      street: 'Stalina 3',
      zip_code: '4212',
      percent: 3,
    },
  ]);
};
