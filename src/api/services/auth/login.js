const {findEmployeeByEmail} = require('../../../domain/queries/employees');

const jwtTokenHelper = require('../helpers/jwtTokenHelper');

const login = async (data) => {
  const {email, password} = data;
  const employee = await findEmployeeByEmail(email);

  if (!employee.length) {
    throw new Error('No such user with email')
  }

  if (employee[0].password !== password) {
    throw new Error('Invalid password')
  }

  const token = jwtTokenHelper.createApiToken({
    id: employee[0].id_employee,
    role: employee[0].role,
  })

  return {
    data: {token},
  }
}

module.exports = {
  login,
};

