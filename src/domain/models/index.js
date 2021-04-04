'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
const sequelize = require('../connection');

const addModelsFromFolder = (folder) => {
  fs
    .readdirSync(folder)
    .filter((file) => {
      return (file.indexOf('.') !== 0) && (file !== basename) &&
        (file.slice(-3) === '.js');
    })
    .forEach((file) => {
      const model = require(
        path.join(folder, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
};

addModelsFromFolder(__dirname + '/');

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.sequelize.sync({
//   alter: true,
//   force: true,
// }).then(async () => {
//   await require('../seeders/categories')(db);
//
//   await require('../seeders/products')(db);
//   await require('../seeders/store_products')(db);
//
//   await require('../seeders/customers')(db);
//   await require('../seeders/customer_cards')(db);
//
//   await require('../seeders/checks')(db);
//   await require('../seeders/sales')(db);
// });

module.exports = db;
