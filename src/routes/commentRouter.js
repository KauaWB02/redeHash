const express = require('express');

const authMiddleware = require('../middlewares/auth');
const commentController = require('../controllers/commentsController');

const commentRouter = express.Router();

commentRouter.post(
  '/create/:id_post',
  authMiddleware,
  commentController.create
);

commentRouter.get(
  '/list/:id_post',
  authMiddleware,
  commentController.ListComments
);

commentRouter.delete(
  '/delete/:id_comment',
  authMiddleware,
  commentController.deleteComment
);


module.exports = commentRouter;