const {Employee} = require('../../../domain/models');

const jwtTokenHelper = require('../helpers/jwtTokenHelper');

const login = async (data) => {
  const {email, password} = data;
  const employee = await Employee.findOne({where: {email}});

  if (!employee) {
    throw new Error('No such user with email')
  }

  if (!employee.checkPassword(password, employee.salt, employee.passwordHash)) {
    throw new Error('Invalid password')
  }

  const token = jwtTokenHelper.createApiToken({
    id: employee.id_employee,
    role: employee.role,
  })

  return {
    data: {token},
  }
}

module.exports = {
  login,
};

