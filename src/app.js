const express = require('express');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/auth');
const friendRouter = require('./routes/friendRouter');
const postRouter = require('./routes/postRouter');

const app = express();

app.use(express.json());
app.use(usersRouter);
app.use('/friend', friendRouter);
app.use('/post', postRouter)
app.use(authRouter);

module.exports = app;
