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
  ]);
};
