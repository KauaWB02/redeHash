const postModel = require('../models/postModel');


const createPost = async (req, res) => {
    const { body } = req;
    const { id_user } = req.params;

    await postModel.createPost(id_user, body);

    return res.status(200).send('Post criado!');
}



module.exports = {
    createPost
}