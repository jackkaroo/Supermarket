module.exports = async function(db) {
  await db.Check.bulkCreate([
    {
      check_number: 1,
      id_employee: 'id_empl_1',
      card_number: 'card_number_1',
      print_date: '2021-05-03',
      sum_total: 40560 + (40560 * 0.2) / 1.2,
      vat: (40560 * 0.2) / 1.2,
    },
    {
      check_number: 2,
      id_employee: 'id_empl_3',
      card_number: 'card_number_2',
      print_date: '2020-12-18',
      sum_total: 79560 + (79560 * 0.2) / 1.2,
      vat: (79560 * 0.2) / 1.2,
    },
    {
      check_number: 3,
      id_employee: 'id_empl_3',
      card_number: 'card_number_3',
      print_date: '2021-01-17',
      sum_total: 7956 + (7956 * 0.2) / 1.2,
      vat: (7956 * 0.2) / 1.2,
    },
    {
      check_number: 4,
      id_employee: 'id_empl_1',
      card_number: 'card_number_2',
      print_date: '2021-03-08',
      sum_total: 54520.8 + (54520.8 * 0.2) / 1.2,
      vat: (54520.8 * 0.2) / 1.2,
    },


    {
      check_number: 5,
      id_employee: 'id_empl_3',
      card_number: 'card_number_1',
      print_date: '2021-02-12',
      sum_total: 54520.8 + (54520.8 * 0.2) / 1.2,
      vat: (54520.8 * 0.2) / 1.2,
    },
    {
      check_number: 6,
      id_employee: 'id_empl_4',
      card_number: 'card_number_4',
      print_date: '2021-04-08',
      sum_total: 54520.8 + (54520.8 * 0.2) / 1.2,
      vat: (54520.8 * 0.2) / 1.2,
    },
    {
      check_number: 7,
      id_employee: 'id_empl_4',
      card_number: 'card_number_5',
      print_date: '2021-04-02',
      sum_total: 54520.8 + (54520.8 * 0.2) / 1.2,
      vat: (54520.8 * 0.2) / 1.2,
    },
    {
      check_number: 8,
      id_employee: 'id_empl_1',
      card_number: 'card_number_6',
      print_date: '2021-04-05',
      sum_total: 54520.8 + (54520.8 * 0.2) / 1.2,
      vat: (54520.8 * 0.2) / 1.2,
    },
  ]);
};
