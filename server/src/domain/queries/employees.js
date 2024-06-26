const {sequelize} = require('../models');
const crypto = require('crypto');

const findEmployeeById = (id) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Employees ' +
    'WHERE Employees.id_employee = ' + `'${id}' ` +
    'LIMIT 1;',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const findEmployeeByEmail = (email) => {
  return sequelize.query(
    'SELECT * ' +
    'FROM Employees ' +
    'WHERE Employees.email = ' + `'${email}' ` +
    'LIMIT 1;',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const getEmployees = () => {
  return sequelize.query(
    'SELECT *' +
    'FROM Employees' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const addEmployee = (body) => {
  const {password} = body;
  const {salt, passwordHash} = createPasswordData(password);
  return sequelize.query(
    'INSERT INTO Employees (id_employee, email, empl_surname, empl_name, empl_patronymic, role, salary,' +
    ' date_of_birth, date_of_start, phone_number, city, street, zip_code, salt, passwordHash) ' +
    `VALUES ("${body.id_employee}", "${body.email}", 
    "${body.empl_surname}", "${body.empl_name}", "${body.empl_patronymic}", 
    "${body.role}", "${body.salary}", "${body.date_of_birth}", "${body.date_of_start}",
    "${body.phone_number}", "${body.city}", "${body.street}", "${body.zip_code}", "${salt}", "${passwordHash}" ) ` +
    ';',
    {type: sequelize.QueryTypes.INSERT},
  );
}

const editEmployee = (id, body) => {
  const {password} = body;
  let baseQuery = `SET id_employee = "${body.id_employee}", email = "${body.email}", 
    empl_surname = "${body.empl_surname}", empl_name = "${body.empl_name}", empl_patronymic = "${body.empl_patronymic}", 
    role = "${body.role}", salary = "${body.salary}", date_of_birth = "${body.date_of_birth}", date_of_start = "${body.date_of_start}",
    phone_number = "${body.phone_number}", city = "${body.city}", street = "${body.street}", zip_code = "${body.zip_code}" `;

  if (password) {
    const {salt, passwordHash} = createPasswordData(password);
    const insertString = `, salt = "${salt}", passwordHash = "${passwordHash}" `
    baseQuery = baseQuery.concat(' ', insertString);
  }

  return sequelize.query(
    'UPDATE Employees  ' +
    baseQuery +
    `WHERE id_employee = "${id}" ` +
    ';',
    {type: sequelize.QueryTypes.UPDATE},
  );
}

const deleteEmployee = (id) => {
  console.log(id)
  return sequelize.query(
    'DELETE FROM Employees WHERE Employees.id_employee = ' + `'${id}' ` +
    ';',
  );
}

const getEmployeesCheckCustomerKyiv = () => {
  return sequelize.query(
    'SELECT Employees.id_employee, empl_surname, empl_name ' +
    'FROM Employees ' +
    'WHERE NOT EXISTS ( ' +
    'Select * FROM Checks Where card_number IN (' +
    'SELECT card_number From Customer_Cards Where city="Kyiv"' +
    'AND card_number NOT IN (' +
    'SELECT card_number From Checks Where Employees.id_employee = Checks.id_employee' +
    ') '+
    ')' +
    ')' +
    'AND NOT EXISTS (' +
    'Select * From Checks Where Employees.id_employee = Checks.id_employee ' +
    'AND Checks.card_number NOT IN (' +
    'SELECT Customer_Cards.card_number From Customer_Cards Where city="Kyiv" ' +
    ')' +
    ')' +
    ';',
    {type: sequelize.QueryTypes.SELECT},
  );
}

const SALT_LENGTH = 16;
const KEY_LENGTH  = 64;

const _generateSalt = () => {
  const salt = crypto.randomBytes(SALT_LENGTH);

  return salt.toString('hex');
}

const _hashPassword = (password, salt) => {
  const hash = crypto.scryptSync(password, salt, KEY_LENGTH);

  return hash.toString('hex');
}

const createPasswordData = (password) => {
  const salt = _generateSalt();
  const passwordHash = _hashPassword(password, salt);
  return {salt, passwordHash}
}

module.exports = {
  getEmployeesCheckCustomerKyiv,
  getEmployees,
  deleteEmployee,
  findEmployeeByEmail,
  findEmployeeById,
  addEmployee,
  editEmployee
};

