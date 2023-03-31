const usersModel = require("../models/usersModel");

const getAll = async (req, res) => {
  const users = await usersModel.getAll();

  return res.status(200).json(users);
};

const postCreate = async (req, res) => {

  const user = await usersModel.postCreate(req.body);

  return res.status(201).json(user);
};

const postUpdate = async (req, res) => {
  const id = req.params.id_user;

  await usersModel.postUpdate(id, req.body);

  return res.status(200).json({
    messagem: "Dados editados com sucesso",
    code: 200,
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id_user;

  await usersModel.deleteUser(id);

  return res.status(200).json({
    messagem: "Dados excluidos com sucesso",
    code: 200,
  });
};

module.exports = {
  getAll,
  postCreate,
  postUpdate,
  deleteUser,
};
