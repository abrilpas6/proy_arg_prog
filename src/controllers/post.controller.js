const Post = require("../models/post.model");

const ctrlPost = {};

// CONTROLADORES CRUD

// CONTROLADOR OBTENER TODOS LOS POSTS
ctrlPost.getAllPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.render("post", { result: posts });
  //res.send(posts);
};
//CONTROLADOR PARA ABRIR PAGINA DE CREAR POST
ctrlPost.indexCreatePost = (req, res) => {
  res.render("createPost");
};

//CONTROLADOR CREAR POST

ctrlPost.createPost = async (req, res) => {
  const { titulo, contenido, urlImagen } = req.body;

  const posteo = {
    titulo: titulo,
    contenido: contenido,
    urlImagen: urlImagen,
  };
  try {
    const newPost = await Post.create(posteo);
    res.redirect("/post");
    //res.send(newPost);
  } catch (error) {
    res.status(400).send({ message: "Error en la creacion de post" });
  }
};

ctrlPost.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const postEliminado = await Post.destroy({
      where: {
        id: id,
      },
    });
    if (postEliminado) {
      return res.redirect("/post");
    } else {
      return res
        .status(400)
        .send({ mensaje: "El post que desea eliminar no existe" });
    }
  } catch (error) {
    return res.status(400).send({ mensaje: "Error al eliminar post" });
  }
};

ctrlPost.editPost = async (req, res) => {
  const { id, titulo, contenido, urlImagen } = req.body;

  const updatePost = {
    titulo: titulo,
    contenido: contenido,
    urlImagen: urlImagen,
  };
  try {
    const postAfterEdit = await Post.update(updatePost, {
      where: { id: id },
    });
    return res.redirect("/post");
  } catch (error) {
    return res.status(400).send({ mensaje: "Error al actualizar post" });
  }
};
//CONTROLADOR DE RENDERIZADO Y EDIT

ctrlPost.indexEditPost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOne({ where: { id: id } });
  res.render("editPost", { result: post });
};

module.exports = { ctrlPost };
