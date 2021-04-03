const {Sequelize} = require('sequelize');

/*
  CREATE DATABASE supermarket;
  CREATE USER 'supermarket_user'@'%' IDENTIFIED BY 'supermarket_user_password';
  GRANT ALL PRIVILEGES ON supermarket.* to 'supermarket_user'@'%';
*/

const sequelize = new Sequelize(
  'supermarket',
  'supermarket_user',
  'supermarket_user_password',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 0,
    define: {
      timestamps: false
    },
  },
);

sequelize.authenticate().then(() => {
  console.log(
    `Database supermarket running.`,
  );
}).catch((error) => {
  console.log('Error when running database \n', error);
});

module.exports = sequelize;
