const e = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const express = require("express");

//RUTAS
const postRoutes = require("./routes/post.routes");
const indexRoutes = require("./routes/index.routes");

const path = require("node:path");
const app = express();
const PORT = process.env.PORT || 5000;
//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//configuracion para el motor de busqueda
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

//Test de conexion DB brow
const { DBTest } = require("./database/db.js");

DBTest();

//Requests
app.use(indexRoutes);
app.use(postRoutes);

app.listen(PORT, () =>
  console.log(`servidor corriendo y escuchando en el puerto ${PORT}`)
);
