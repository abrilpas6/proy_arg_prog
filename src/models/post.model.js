const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Post = sequelize.define("Post", {
  // Model attributes are defined here
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
    // allowNull defaults to true
  },
  urlImagen: {
    type: DataTypes.STRING(2000),
    allowNull: false,
  },
});

// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post); // true

Post.sync();
module.exports = Post;
