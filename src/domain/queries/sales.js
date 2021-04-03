const {sequelize} = require('../models');

// all sales of customers with customer cards
const getSalesOfCustomers = () => {
  return sequelize.query(
    'SELECT Customer_Cards.cust_surname, Customer_Cards.card_number, COUNT (Sales.check_number) AS sales ' +
    'FROM (Checks INNER JOIN Sales ON Checks.check_number = Sales.check_number)' +
    'INNER JOIN Customer_Cards ON Customer_Cards.card_number = Checks.card_number ' +
    'GROUP BY Customer_Cards.card_number' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
};

// all sales of customer with card_number
const getSalesOfCustomer = (card_number) => {
  return sequelize.query(
    'SELECT Customer_Cards.cust_surname, Customer_Cards.card_number, COUNT (Sales.check_number) AS sales ' +
    'FROM (Checks INNER JOIN Sales ON Checks.check_number = Sales.check_number)' +
    'INNER JOIN Customer_Cards ON Customer_Cards.card_number = Checks.card_number ' +
    'WHERE Customer_Cards.card_number = ' + `'${card_number}' ` +
    'GROUP BY Customer_Cards.card_number' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
};

module.exports = {
  getSalesOfCustomers,
  getSalesOfCustomer,
};

