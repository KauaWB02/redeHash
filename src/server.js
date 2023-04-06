/* eslint-disable no-unused-vars */
const app = require('./app');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('Server is runnig...'));
