const express = require("express");
const usersRouter = require("./routes/usersRouter");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(usersRouter);
app.use(authRouter);

module.exports = app;