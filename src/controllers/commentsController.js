const commentModel = require('../models/commentModel');

const create = async (req, res) => {
  const {id_post} = req.params;

  let returnComment = await commentModel.comment(id_post, req.body);

  res.status(201).send(returnComment);
};

const ListComments = async (req, res) => {
  const {id_post} = req.params;

  let comments = await commentModel.ListComments(id_post);

  res.status(200).send(comments);
};

const deleteComment = async (req, res) => {
  const idUser = req.headers.iduser;
  const {id_comment} = req.params;
  let msg = 'Você não tem permissão para isso!';
  let [comments] = await commentModel.findCommentById(id_comment);

  if (idUser == comments?.idPostUser || idUser == comments?.idCommentUser) {
    msg = await commentModel.DeleteComment(id_comment);

    res.status(200).send(msg);
  }else{

    res.status(200).send(msg);
  }
};

module.exports = {
  create,
  deleteComment,
  ListComments,
};
