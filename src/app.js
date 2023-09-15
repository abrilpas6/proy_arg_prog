const e = require("cors");
const express = require("express");
const { DBTest } = require("./database/db.js");

const app = express();

//Test de conexion brow
DBTest();
/*app.get("/user", (req, res) => {
  res.send("Hello user");
});*/
///Se le agrega a lo que ya estaba corriendo. Tenes que buscarlo por el nombre que esta entre las comillas ///

app.listen(3000, () =>
  console.log("servidor corriendo y escuchando en el puerto 3000")
);

//const user = insert into "usuarios" values ()///
