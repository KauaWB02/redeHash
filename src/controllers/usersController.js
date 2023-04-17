const usersModel = require('../models/usersModel');

const getAll = async (req, res) => {
  const users = await usersModel.getAll();

  return res.status(200).json(users);
};

const getAllUsers = async (req, res) => {
  let {id_user_login} = req.params;
  const users = await usersModel.getAllUsers(id_user_login);

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const id = req.params.id_user;
  const user = await usersModel.getUserById(id);

  return res.status(200).json(user);
};

const postCreate = async (req, res) => {
  await usersModel.postCreate(req.body);

  return res.status(201).json('Usuário registrado com sucesso!');
};

const postUpdate = async (req, res) => {
  const id = req.params.id_user;

  await usersModel.postUpdate(id, req.body);

  return res.status(200).json({
    messagem: 'Dados editados com sucesso',
    code: 200,
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id_user;

  await usersModel.deleteUser(id);

  return res.status(200).json({
    messagem: 'Dados excluidos com sucesso',
    code: 200,
  });
};

module.exports = {
  getAll,
  postCreate,
  postUpdate,
  deleteUser,
  getUserById,
  getAllUsers,
};
