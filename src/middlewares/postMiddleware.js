const validateCreatePost = (req, res, next) => {
    const { body } = req;
    const { id_user } = req.params;
    //validate name
    if (id_user === 'undefined') {
        return res.status(400).json({
            message: 'Parametro de url [id_user] não foi preenchido',
        });
    }

    if (id_user === ' ') {
        return res.status(400).json({
            message: 'Parametro de url [id_user] não foi preenchido',
        });
    }

    if (body.description === undefined) {
        return res.status(400).json({
            message: 'O campo description não pode ser indefinido',
        });
    }

    if (body.description === '') {
        return res.status(400).json({
            message: 'O campo description não pode ser vazio',
        });
    }

    next();
};

module.exports = validateCreatePost;
