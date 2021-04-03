module.exports = (Sequelize, DataTypes) => {
  const Employee = Sequelize.define('Employee', {
    id_employee: {
      type: DataTypes.STRING(10),
      primaryKey: true
    },
    empl_surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    empl_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    empl_patronymic: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL(13, 4),
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_of_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  Employee.associate = (models) => {
    Employee.hasMany(models.Check, {
      targetKey: 'id_employee',
      foreignKey: 'id_employee',
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
    });
  };

  return Employee;
};
