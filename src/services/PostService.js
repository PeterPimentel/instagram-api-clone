const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const index = async (params) =>{
    const posts = await Post.find().sort('-createdAt');
    return posts;
}

const store = async (data, file) => {
    const {filename: image, path:imagePath, destination} = file;

    const [name] = image.split('.');
    const filename = `${name}.jpg`;

    await sharp(imagePath)
    .resize(500) //Tamanho máximo 500px
    .jpeg({quality:70})//Formato jpeg e com qualidade 70% da original
    .toFile(
        path.resolve(destination,'resized',filename)
    );

    fs.unlinkSync(imagePath); //Excluir a imagem original

    const post = await Post.create({
        author: data.author,
        place: data.place,
        hashtags: data.hashtags,
        description: data.description,
        image : filename
    });

    return post;
}

module.exports = { store, index}