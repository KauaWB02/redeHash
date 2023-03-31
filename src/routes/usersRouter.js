const express = require('express');

const usersController = require('../controllers/usersController');
const usersMiddleware = require('../middlewares/usersMiddleware');
const authMiddleware = require('../middlewares/auth');

const userRouter = express.Router();

userRouter.get('/users', authMiddleware, usersController.getAll);

userRouter.post(
	'/user',
	authMiddleware,
	usersMiddleware.validateFieldsUser,
	usersController.postCreate
);

userRouter.post(
	'/user/add',
	authMiddleware,
	usersMiddleware.validateAddUser,
	usersController.addUser
);

userRouter.post('/user/:id_user', authMiddleware, usersController.postUpdate);

userRouter.delete('/user/:id_user', authMiddleware, usersController.deleteUser);

module.exports = userRouter;
