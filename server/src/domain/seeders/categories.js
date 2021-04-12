module.exports = async function(db) {
  await db.Category.bulkCreate([
    {
      category_number: 1,
      category_name: 'Shoes',
    },
    {
      category_number: 2,
      category_name: 'Clothes',
    },
    {
      category_number: 3,
      category_name: 'Food',
    },
    {
      category_number: 4,
      category_name: 'Alcohol',
    },
    {
      category_number: 5,
      category_name: 'Drinks',
    },
    {
      category_number: 6,
      category_name: 'Сosmetics',
    },
    {
      category_number: 7,
      category_name: 'Shampoos',
    },
  ]);
};
