const connection = require('./connection');

const comment = async (idPost, body) => {
  const query =
    'INSERT INTO post_comments(ID_USER, ID_POST, COMMENT,DATE_COMMENT) VALUES(?, ?, ?)';

  await connection.execute(query, [body.idUser, idPost, body.comment,new Date()]);

  return 'Comentario enviado!';
};

const findCommentById = async (id) => {
  let [comment] = await connection.execute(
    'SELECT p.id_user as idPostUser, c.id_user as idCommentUser FROM post_comments as c inner join post as p on c.id_post = p.id where c.id = ?',
    [id]
  );
  return comment;
};

const ListComments = async (idPost) => {
  const query =
    'SELECT post.id,user.name,post.comment,date_comment FROM post_comments AS post LEFT JOIN users AS user ON post.ID_USER = user.ID WHERE post.ID_POST = ?';

  let [comment] = await connection.execute(query, [idPost]);

  return comment;
};

const DeleteComment = async (id) => {
  const query = 'DELETE FROM post_comments WHERE id = ?';

  await connection.execute(query, [id]);

  return 'Comentario deletado!';
};

module.exports = {
  comment,
  ListComments,
  DeleteComment,
  findCommentById,
};
