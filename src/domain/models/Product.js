module.exports = (Sequelize, DataTypes) => {
  const Product = Sequelize.define('Product', {
    id_product: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    characteristics: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'category_number',
      targetKey: 'category_number',
    });
    Product.hasMany(models.Store_Product, {
      targetKey: 'id_product',
      foreignKey: 'id_product',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Product;
};
