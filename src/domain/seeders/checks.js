module.exports = async function(db) {
  await db.Check.bulkCreate([
    {
      check_number: 1,
      id_employee: 'id_empl_1',
      card_number: 'card_number_1',
      print_date: '2021-05-3',
      sum_total: 500 + (500 * 0.2) / 1.2,
      vat: (500 * 0.2) / 1.2,
    },
    {
      check_number: 2,
      id_employee: 'id_empl_2',
      card_number: 'card_number_2',
      print_date: '2021-05-3',
      sum_total: 900 + (900 * 0.2) / 1.2,
      vat: (900 * 0.2) / 1.2,
    },
    {
      check_number: 3,
      id_employee: 'id_empl_3',
      card_number: 'card_number_3',
      print_date: '2021-05-3',
      sum_total: 1200 + (1200 * 0.2) / 1.2,
      vat: (1200 * 0.2) / 1.2,
    },
    {
      check_number: 4,
      id_employee: 'id_empl_1',
      card_number: 'card_number_3',
      print_date: '2021-05-3',
      sum_total: 1200 + (1200 * 0.2) / 1.2,
      vat: (1200 * 0.2) / 1.2,
    },
  ]);
};
