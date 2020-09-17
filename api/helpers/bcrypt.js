const bcrypt = require('bcrypt');
const { saltRounds } = require('../config');

const genSalt = () => {
  return bcrypt.genSaltSync(+saltRounds);
};

const encryptPassword = (password) => {
  const salt = genSalt();
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (passwordFromClient, encryptedPassword) => {
  return bcrypt.compareSync(passwordFromClient, encryptedPassword);
};

module.exports = { encryptPassword, comparePassword };
