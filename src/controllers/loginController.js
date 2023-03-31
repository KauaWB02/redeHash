const loginModel = require("../models/loginModel");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (email == null || password == null) {
    return res.status(401).json({
      error: "Dados não preenchidos.",
    });
  }

  const [userFind] = await loginModel.findUser(email);

  // if (bcrypt.compareSync(password, userFind[0].password)) {
  const token = jwt.sign(userFind[0], config.jwtSecret);

  return res.json({
    user: {
      id: userFind[0].id,
      name: userFind[0].name,
      email: userFind[0].email,
      phone: userFind[0].phone,
      created_at: userFind[0].created_at,
    },
    token: token,
  });
  // } else {
  //   return res.status(401).json({
  //     error: "Email ou senha estão incorretos.",
  //   });
  // }
};

module.exports = {
  login,
};
