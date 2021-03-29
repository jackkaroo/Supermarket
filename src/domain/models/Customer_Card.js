module.exports = (Sequelize, DataTypes) => {
  const Customer_Card = Sequelize.define('Customer_Card', {
    card_number: {
      type: DataTypes.STRING(13),
      primaryKey: true
    },
    cust_surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    cust_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    cust_patronymic: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    street: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    zip_code: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });

  Customer_Card.associate = (models) => {
    Customer_Card.hasMany(models.Check, {
      targetKey: 'card_number',
      foreignKey: 'card_number',
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
    });
  };

  return Customer_Card;
};
