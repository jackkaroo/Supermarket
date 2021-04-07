module.exports = async function(db) {
  await db.Employee.bulkCreate([
    {
      id_employee: 'id_empl_1' ,
      empl_surname: 'Podopryhora',
      empl_name: 'Polina',
      empl_patronymic: 'Romanivna' ,
      role: 'seller',
      salary: 7000 ,
      date_of_birth: '2000-08-26' ,
      date_of_start:  '2021-01-17',
      phone_number: '+380679876534',
      city: 'Kyiv' ,
      street: 'Kashtanova 8' ,
      zip_code: '02345'
    },
    {
      id_employee: 'id_empl_2' ,
      empl_surname: 'Malyar',
      empl_name: 'Nastya',
      empl_patronymic: 'Vitaliivna' ,
      role: 'manager',
      salary: 13000 ,
      date_of_birth: '2001-01-19' ,
      date_of_start:  '2020-09-21',
      phone_number: '+380678076543',
      city: 'Kyiv' ,
      street: 'Liskivskya 12' ,
      zip_code: '02222'
    },
    {
      id_employee: 'id_empl_3' ,
      empl_surname: 'Babenich',
      empl_name: 'Dima',
      empl_patronymic: 'Viktorovich' ,
      role: 'seller',
      salary: 12000 ,
      date_of_birth: '2001-01-17' ,
      date_of_start:  '2020-09-20',
      phone_number: '+380674476543',
      city: 'Mikolaiv' ,
      street: 'Stalina 12' ,
      zip_code: '7752'
    },
  ]);
};
