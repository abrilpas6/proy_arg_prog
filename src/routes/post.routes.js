const postRoutes = require("express").Router();
const { ctrlPost } = require("../controllers/post.controller");

//LEER TODOS LOS POSTS
postRoutes.get("/post", ctrlPost.getAllPosts);

postRoutes.get("/createPost", ctrlPost.indexCreatePost);
//CREAR POST
postRoutes.post("/savePost", ctrlPost.createPost);

//BORRAr post

postRoutes.get("/deletePost/:id", ctrlPost.deletePost);

//RUTA PARA RENDERIZAR LA PAGINA PARA EDIT POST

postRoutes.get("/editPost/:id", ctrlPost.indexEditPost);

//EDIT POST
postRoutes.post("/updatePost", ctrlPost.editPost);

module.exports = postRoutes;
