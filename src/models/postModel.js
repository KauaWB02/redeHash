const connection = require('./connection');

const createPost = async (id_user, body) => {
  const query =
    'INSERT INTO post (TITLE,URL_IMAGE,DESCRIPTION,DATE_CREATED,ID_USER) VALUES(?,?,?,?,?)';
  await connection.execute(query, [
    body.title,
    body.url_image,
    body.description,
    new Date(),
    id_user,
  ]);
};

const selectPosts = async (idPostUser, idUser) => {

  const query =
    'SELECT DISTINCT post.ID_USER, post.id,users.NAME, post.TITLE, post.URL_IMAGE, post.DESCRIPTION, post.DATE_CREATED FROM POST AS post INNER JOIN USERS AS users ON post.id_user = users.id LEFT JOIN (SELECT id_user, id_friend FROM USERS_FRIENDS WHERE id_user = ? OR id_friend = ?) AS friend ON post.id_user = friend.id_user WHERE friend.id_user IS NOT NULL OR post.id_user = ?';

  let [posts] = await connection.execute(query, [idUser, idUser, idPostUser]);

  return posts;
};

const getPostById = async (id) => {
  const query =
    'SELECT ID,URL_IMAGE,DESCRIPTION,DATE_CREATED FROM POST where id =?';

  let [post] = await connection.execute(query, [id]);

  return post;
};

const deletePost = async (id) => {
  await connection.execute('DELETE FROM post_comments where id_post = ?', [id]);
  await connection.execute('DELETE FROM post WHERE ID = ?', [id]);

  return 'Post deletado com sucesso!';
};

module.exports = {
  createPost,
  selectPosts,
  getPostById,
  deletePost,
};
