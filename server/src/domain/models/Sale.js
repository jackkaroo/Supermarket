module.exports = (Sequelize, DataTypes) => {
  const Sale = Sequelize.define('Sale', {
    UPC: {
      type: DataTypes.STRING(12),
      primaryKey: true
    },
    check_number: {
      type: DataTypes.STRING(10),
      primaryKey: true
    },
    product_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    selling_price: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.Store_Product, {
      foreignKey: 'UPC',
      targetKey: 'UPC',
    });
  };

  return Sale;
};
