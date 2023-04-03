const express = require('express');

const validateAddFriend = require('../middlewares/friendMiddleware');
const authMiddleware = require('../middlewares/auth');
const friendController = require('../controllers/friendController');

const friendRouter = express.Router();

friendRouter.post(
  '/add',
  authMiddleware,
  validateAddFriend,
  friendController.addFriend
);

friendRouter.get(
  '/invites/:idUserLogin',
  authMiddleware,
  friendController.findRequestFriend
);
friendRouter.get(
  '/:idUserLogin',
  authMiddleware,
  friendController.findFriends
);

friendRouter.post(
  '/invite/accept/:idUserLogin',
  authMiddleware,
  friendController.acceptFriend
);

friendRouter.delete(
  '/invite/refuse',
  authMiddleware,
  validateAddFriend,
  friendController.refuseFriend
);

module.exports = friendRouter;
