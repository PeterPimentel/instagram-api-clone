const Post = require('../models/Post');

const store = async (params, data) => {
    const post = await Post.findById(params.id);
    if(post._id) {
        post.likes += 1;
        await post.save();
        return post;
    }else {
        return {"text":"Postagem não encontrada."}
    }
}

module.exports = { store }