const express = require('express');
const {login} = require('../../../services/auth/login');

const authRouter = express();

authRouter
  .post('/login', async (req, res, next) => {
    try {
      const data = await login(req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  })

module.exports = authRouter;
