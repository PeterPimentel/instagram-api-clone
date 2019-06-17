const LikeService = require('../../src/services/LikeService');
const Post = require('../../src/models/Post');

const POST_1 = {
    "likes": 3,
    "_id": "5d06fc59ba40e746c8c70631",
    "author": "Peter Souza",
    "place": "Salvador",
    "hashtags": "#hashtag1 hashtag2",
    "description": "Um simples post",
    "image": "screen-node.jpg",
    "save": function (){console.log("Mock da função save do mongoose")}
}

test('should increment by 1 the like number', async () => {
    
    Post.findById = jest.fn();
    Post.findById.mockImplementation(() => Promise.resolve(POST_1));
    POST_1.save = jest.fn();

    const post = await LikeService.store("5d06fc59ba40e746c8c70631");
    
    expect(Post.findById).toHaveBeenCalled();
    expect(POST_1.save).toHaveBeenCalled();
    expect(post.likes).toBe(4);
});

test('should show a error message', async () => {
    
    Post.findById = jest.fn();
    Post.findById.mockImplementation(() => Promise.resolve({}));
    POST_1.save = jest.fn();

    const post = await LikeService.store("INVALID_ID");
    
    expect(Post.findById).toHaveBeenCalled();
    expect(POST_1.save).not.toHaveBeenCalled();
});