const express = require('express');

const validateCreatePost = require('../middlewares/postMiddleware');
const authMiddleware = require('../middlewares/auth');
const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post(
  '/create/:id_user',
  authMiddleware,
  validateCreatePost,
  postController.createPost
);
postRouter.get('/list/:id_post', authMiddleware, postController.getAllPost);
postRouter.get('/:id_post', authMiddleware, postController.getPostById);
postRouter.delete('/delete/:id_post', authMiddleware, postController.deletePost);

module.exports = postRouter;
