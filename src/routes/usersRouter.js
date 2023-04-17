const express = require('express');

const usersController = require('../controllers/usersController');
const usersMiddleware = require('../middlewares/usersMiddleware');
const authMiddleware = require('../middlewares/auth');

const userRouter = express.Router();

userRouter.get('/users', usersController.getAll);
userRouter.get('/users/:id_user_login', usersController.getAllUsers);

userRouter.get('/user/:id_user', authMiddleware, usersController.getUserById);

userRouter.post(
  '/user',
  usersMiddleware.validateFieldsUser,
  usersController.postCreate
);

userRouter.post('/user/:id_user', authMiddleware, usersController.postUpdate);

userRouter.delete('/user/:id_user', authMiddleware, usersController.deleteUser);

module.exports = userRouter;
