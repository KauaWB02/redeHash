const connection = require("./connection");
const bcrypt = require("bcrypt");

const getAll = async () => {
  const [users] = await connection.execute(
    "SELECT * FROM users where user_deleted =? ",
    [false]
  );

  return users;
};

const postCreate = async user => {
  const { name, email, password } = user;
  const created_at = new Date();
  const salt1 = await bcrypt.genSalt(10);

  const senhaBcrypt = await bcrypt.hash(password, salt1);

  const query =
    "INSERT INTO users(name, email, password, created_at) VALUES(?, ?, ?, ?)";

  await connection.execute(query, [name, email, senhaBcrypt, created_at]);
};

const postUpdate = async (id, user) => {
  const { name, email, phone, password } = user;
  let updated_at = new Date();
  const query =
    "UPDATE users SET name = ?, email = ?, phone = ?, password = ?, updated_at = ?, WHERE id = ?";

  const updateUser = await connection.execute(query, [
    name,
    email,
    phone,
    password,
    updated_at,
    id,
  ]);

  return updateUser;
};

const deleteUser = async id => {
  const deleteUser = await connection.execute(
    "UPDATE users SET updated_del = ?, user_deleted = ? where id =?",
    [new Date(), true, id]
  );

  return deleteUser;
};

module.exports = {
  getAll,
  postCreate,
  postUpdate,
  deleteUser,
};
