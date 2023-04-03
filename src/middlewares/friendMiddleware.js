const validateAddFriend = (req, res, next) => {
  const {body} = req;

  //validate name
  if (body.IdUserFrom === undefined) {
    return res.status(400).json({
      message: 'O campo IdUserFrom não pode ser indefinido',
    });
  }

  if (body.IdUserFrom === '') {
    return res.status(400).json({
      message: 'O campo IdUserFrom não pode ser vazio',
    });
  }

  if (body.IdUserTo === undefined) {
    return res.status(400).json({
      message: 'O campo IdUserTo não pode ser indefinido',
    });
  }

  if (body.IdUserTo === '') {
    return res.status(400).json({
      message: 'O campo userTo não pode ser vazio',
    });
  }

  next();
};

module.exports = validateAddFriend;
