const connection = require('../models/connection');

const findUser = async (email) => {
  const query = 'SELECT * FROM users WHERE email = ?;';

  const userFind = await connection.execute(query, [email]);

  return userFind;
};

module.exports = {
  findUser,
};
