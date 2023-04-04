const friendModel = require('../models/friendModel');

const addFriend = async (req, res) => {
  let {IdUserFrom, IdUserTo} = req.body;
  const convite = await friendModel.addFriend(IdUserFrom, IdUserTo);

  return res.status(200).send(convite);
};

const refuseFriend = async (req, res) => {
  let {IdUserFrom, IdUserTo} = req.body;
  await friendModel.refuseFriend(IdUserFrom, IdUserTo);

  return res.status(200).send('Convite recusado!');
};

const acceptFriend = async (req, res) => {
  let {idUserRequest} = req.body;
  let {idUserLogin} = req.params;

  let requests = await friendModel.selectFromId(
    Number(idUserLogin),
    idUserRequest
  );

  if (!requests[0][0]) {
    return res.status(200).send('Não tem pedido de amizade!');
  }

  await friendModel.refuseFriend(
    requests[0][0].id_user_from,
    requests[0][0].id_user_to
  );

  await friendModel.acceptFriend(idUserRequest, idUserLogin);
  await friendModel.acceptFriend(idUserLogin, idUserRequest);

  return res.status(200).send('Agora vocês é amigo!');
};

const findRequestFriend = async (req, res) => {
  let {idUserLogin} = req.params;

  let requests = await friendModel.findRequestFriend(idUserLogin);

  return res.status(200).send(requests[0]);
};

const findFriends = async (req, res) => {
  let {idUserLogin} = req.params;

  let requests = await friendModel.findFriends(idUserLogin);

  return res.status(200).send(requests[0]);
};

module.exports = {
  addFriend,
  refuseFriend,
  acceptFriend,
  findRequestFriend,
  findFriends,
};
