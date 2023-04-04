const express = require('express');

const validateCreatePost = require('../middlewares/postMiddleware')
const authMiddleware = require('../middlewares/auth');
const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post(
  '/create/:id_user',
  authMiddleware,
  validateCreatePost,
  postController.createPost
);


module.exports = postRouter;