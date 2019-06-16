const PostService = require('../services/PostService');

const store = async (req, res) => {
    try {
        const createdPost = await PostService.store(req.body, req.file);
        req.io.emit('post',createdPost);
        res.json(createdPost);
    } catch (error) {
        res.send(error);
    }
}

const index = async (req, res) => {
    try {
        const posts = await PostService.index(req.params);
        res.json(posts);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { store, index }