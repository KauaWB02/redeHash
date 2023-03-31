const validateFieldsUser = (req, res, next) => {
  const { body } = req;

  //validate name
  if (body.name === undefined) {
    return res.status(400).json({
      message: "O campo nome não pode ser indefinido",
    });
  }

  if (body.name === "") {
    return res.status(400).json({
      message: "O campo nome não pode ser vazio",
    });
  }

  //validate email
  if (body.email === undefined) {
    return res.status(400).json({
      message: "O campo email não pode ser indefinido",
    });
  }

  if (body.email === "") {
    return res.status(400).json({
      message: "O campo email não pode ser vazio",
    });
  }

  next();
};

module.exports = { validateFieldsUser };
