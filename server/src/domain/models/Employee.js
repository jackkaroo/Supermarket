const crypto = require('crypto');

const SALT_LENGTH = 16;
const KEY_LENGTH  = 64;

module.exports = (Sequelize, DataTypes) => {
  const Employee = Sequelize.define('Employee', {
    id_employee: {
      type: DataTypes.STRING(10),
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type : DataTypes.VIRTUAL,
      set(password) {
        const salt = Employee._generateSalt();
        this.setDataValue('salt', salt);
        this.setDataValue('passwordHash', Employee._hashPassword(password, salt));
      }
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true,
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

  Employee.prototype.checkPassword = (plain, salt, empHash) => {
    const hash = Employee._hashPassword(plain, salt);

    return hash === empHash;
  }

  Employee._generateSalt = () => {
    const salt = crypto.randomBytes(SALT_LENGTH);

    return salt.toString('hex');
  }

  Employee._hashPassword = (password, salt) => {
    const hash = crypto.scryptSync(password, salt, KEY_LENGTH);

    return hash.toString('hex');
  }

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
