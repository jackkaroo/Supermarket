module.exports = (Sequelize, DataTypes) => {
  const Store_Product = Sequelize.define('Store_Product', {
    UPC: {
      type: DataTypes.STRING(12),
      primaryKey: true
    },
    UPC_prom: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    selling_price: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    products_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    promotional_product: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });

  Store_Product.associate = (models) => {
    Store_Product.belongsTo(models.Product, {
      foreignKey: 'id_product',
      targetKey: 'id_product',
    });
    Store_Product.hasOne(models.Store_Product, {
      foreignKey: 'UPC_prom',
      targetKey: 'UPC',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
    Store_Product.hasMany(models.Sale, {
      foreignKey: 'UPC',
      targetKey: 'UPC',
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    });
  };

  return Store_Product;
};
