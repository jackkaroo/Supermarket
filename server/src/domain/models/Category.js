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
    timestamps: false,
  });

  return Category;
};
