const Post = require('../models/Post');

const store = async (params, data) => {
    const post = await Post.findById(params.id);
    post.likes += 1;
    
    await post.save();

    return post;
}

module.exports = { store }