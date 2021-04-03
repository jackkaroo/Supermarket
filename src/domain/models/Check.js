module.exports = (Sequelize, DataTypes) => {
  const Check = Sequelize.define('Check', {
    check_number: {
      type: DataTypes.STRING(10),
      primaryKey: true
    },
    id_employee: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    card_number: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    print_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sum_total: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    vat: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  Check.associate = (models) => {
    Check.belongsTo(models.Employee, {
      targetKey: 'id_employee',
      foreignKey: 'id_employee',
    });
    Check.belongsTo(models.Customer_Card, {
      targetKey: 'card_number',
      foreignKey: 'card_number',
    });
    Check.hasMany(models.Sale, {
      targetKey: 'check_number',
      foreignKey: 'check_number',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  };

  return Check;
};
