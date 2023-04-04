const connection = require('./connection');

const createPost = async (id_user, body) => {

    const query = 'INSERT INTO post (URL_IMAGE,DESCRIPTION,DATE_CREATED,ID_USER) VALUES(?,?,?,?)';
    await connection.execute(query, [body.description, body.url_image, new Date(), id_user]);
}

const selectPosts = async () => {

    const query = 'SELECT * FROM '
}


module.exports = {
    createPost
}