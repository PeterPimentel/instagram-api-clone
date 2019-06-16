const LikeService = require('../services/LikeService');

const store = async (req, res) => {
    try {
        const updatedPost = await LikeService.store(req.params, req.body);
        req.io.emit('like',updatedPost);
        res.json(updatedPost);
    } catch (error) {
        res.send(error);
    }
}

module.exports = { store }