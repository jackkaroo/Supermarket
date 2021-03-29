const express = require('express');
const {Category} = require('../../../domain/models');

const categories = express();

categories
  .get('/', async (req, res, next) => {
    try {
      console.log('here');
      const data = await Category.findSpecialData();
      res.json(data);
    } catch (error) {
      next(error);
    }
  })
;

module.exports = categories;
