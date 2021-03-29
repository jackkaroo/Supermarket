module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define('Category', {
    category_number: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    timestamps: true,
  });

  Category.findSpecialData = async () => Sequelize.query('SELECT * FROM `Categories`', { type: Sequelize.QueryTypes.SELECT});

  return Category;
};
