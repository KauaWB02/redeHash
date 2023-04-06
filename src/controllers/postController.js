const postModel = require('../models/postModel');
const commentModel = require('../models/commentModel');

const createPost = async (req, res) => {
  const {body} = req;
  const {id_user} = req.params;

  await postModel.createPost(id_user, body);

  return res.status(200).send('Post criado!');
};

const getAllPost = async (req, res) => {
  const {id_user} = req.params;

  let post = await postModel.selectPosts(id_user);

  for (const dadosPost of post) {
    let comments = await commentModel.ListComments(dadosPost.id);
    dadosPost.comments = comments;
  }

  return res.status(200).json(post);
};

const getPostById = async (req, res) => {
  const {id_post} = req.params;
  let [post] = await postModel.getPostById(id_post);

  let comments = await commentModel.ListComments(post.ID);
  post.comments = comments;

  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const {id_post} = req.params;
  let post = await postModel.deletePost(id_post);


  return res.status(200).send(post);
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  deletePost,
};
