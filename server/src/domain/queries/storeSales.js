const {sequelize} = require('../models');
const {Store_Product} = require('../models')

const createCheckFromSales = async (data, id_employee) => {
  await sequelize.transaction(async (_) => {
      const check_number = Math.random().toString(36).substring(10);

      let sum_total = 0;
      const sales = [];
      const {storeProducts, card_number} = data;
      for (let storeProduct of storeProducts) {
        const {UPC, product_number} = storeProduct;

        const storeProductObject  = await Store_Product.findByPk(UPC);
        const {selling_price: productPrice} = storeProductObject;

        const selling_price = product_number * productPrice;
        sum_total += selling_price;

        storeProductObject.increment('products_number', {by: -product_number});

        const newSale = {
          UPC,
          check_number,
          product_number,
          selling_price,
        }

        sales.push(newSale);
      }

      const vat = (sum_total * 0.2) / 1.2;

      const newCheck = {
        check_number,
        id_employee,
        print_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        sum_total: sum_total + vat,
        vat,
      }

      if (card_number) {
        newCheck.check_number = check_number;
        await sequelize.query(
          'INSERT INTO Checks (check_number, id_employee, card_number, print_date, sum_total, vat) ' +
          `VALUES ("${newCheck.check_number}", "${newCheck.id_employee}", "${newCheck.card_number}",
       "${newCheck.print_date}", "${newCheck.sum_total}", "${newCheck.vat}" ) ` +
          ';',
          {type: sequelize.QueryTypes.INSERT},
        );
      } else {
        await sequelize.query(
          'INSERT INTO Checks (check_number, id_employee, print_date, sum_total, vat) ' +
          `VALUES ("${newCheck.check_number}", "${newCheck.id_employee}",
       "${newCheck.print_date}", "${newCheck.sum_total}", "${newCheck.vat}" ) ` +
          ';',
          {type: sequelize.QueryTypes.INSERT},
        );
      }

      await sales.map((newSale) => {
        sequelize.query(
          'INSERT INTO Sales (UPC, check_number, product_number, selling_price ) ' +
          `VALUES ("${newSale.UPC}", "${newSale.check_number}", "${newSale.product_number}", "${newSale.selling_price}" ) ` +
          ';',
          {type: sequelize.QueryTypes.INSERT},
        );
      })
    })
}

module.exports = {createCheckFromSales};
