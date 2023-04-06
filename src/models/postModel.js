const connection = require('./connection');

const createPost = async (id_user, body) => {
  const query =
    'INSERT INTO post (URL_IMAGE,DESCRIPTION,DATE_CREATED,ID_USER) VALUES(?,?,?,?)';
  await connection.execute(query, [
    body.description,
    body.url_image,
    new Date(),
    id_user,
  ]);
};

const selectPosts = async (id) => {
  const query =
    'SELECT p.id,u.NAME,p.URL_IMAGE,p.DESCRIPTION,p.DATE_CREATED FROM POST AS p INNER JOIN USERS_FRIENDS AS f ON p.ID_USER = f.ID_USER INNER JOIN USERS AS u ON u.ID = f.ID_USER WHERE f.ID_FRIEND = ?';

  let [posts] = await connection.execute(query, [id]);

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
