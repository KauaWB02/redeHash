const connection = require('./connection');

const addFriend = async (idFrom, idTo) => {
  let friends = await findFriends(idFrom);

  for (const objectFriend of friends[0]) {
    if (objectFriend.ID_FRIEND == idTo) {
      return 'Já são amigos!';
    }
  }

  const query =
    'INSERT INTO users_invite(id_user_from, id_user_to) VALUES(?, ?)';

  await connection.execute(query, [idFrom, idTo]);

  return 'Convite enviado!';
};

const findRequestFriend = async (id) => {
  const query =
    'SELECT u.name FROM users_invite as i inner join users AS u on i.ID_USER_FROM = u.id WHERE ID_USER_TO = ?;';
  let requestFriends = connection.execute(query, [id]);

  return requestFriends;
};

const findFriends = async (id) => {
  const query =
    'SELECT u.NAME,i.ID_USER,i.ID_FRIEND FROM users_friends as i inner join users AS u on i.ID_FRIEND = u.id WHERE i.ID_USER = ?;';
  let requestFriends = connection.execute(query, [id]);

  return requestFriends;
};

const selectFromId = async (idUserLogin, idUserRequest) => {
  const query =
    'SELECT * FROM users_invite WHERE ID_USER_TO = ? and ID_USER_FROM = ? ';

  let request = connection.execute(query, [idUserLogin, idUserRequest]);
  return request;
};

const acceptFriend = async (idFrom, idTo) => {
  const query = 'INSERT INTO users_friends(ID_USER, ID_FRIEND) VALUES(?, ?)';

  await connection.execute(query, [idFrom, idTo]);
};

const refuseFriend = async (idFrom, idTo) => {
  await connection.execute(
    'DELETE FROM users_invite WHERE ID_USER_TO = ? AND ID_USER_FROM = ?',
    [idTo, idFrom]
  );
};

module.exports = {
  addFriend,
  refuseFriend,
  acceptFriend,
  selectFromId,
  findRequestFriend,
  findFriends,
};
