const {Employee} = require('../../domain/models');
const crypto = require('crypto');

const jwtTokenHelper = require('../helpers/jwtTokenHelper');

const login = async (data) => {
  const {email, password} = data;
  const employee = await Employee.findOne({where: {email}});

  if (!employee) {
    throw new Error('No such user with email')
  }

  if (!checkPassword(password, employee.salt, employee.passwordHash)) {
    throw new Error('Invalid password')
  }

  const token = jwtTokenHelper.createApiToken({
    id: employee.id_employee,
    role: employee.role,
  })

  return {
    data: token,
  }
}

const SALT_LENGTH = 16;
const KEY_LENGTH  = 64;

const checkPassword = (plain, salt, empHash) => {
  const hash = _hashPassword(plain, salt);

  return hash === empHash;
}

const _hashPassword = (password, salt) => {
  const hash = crypto.scryptSync(password, salt, KEY_LENGTH);

  return hash.toString('hex');
}

module.exports = {
  login,
};

