const indexRoutes = require("express").Router();
const { ctrlIndex } = require("../controllers/index.controller");

indexRoutes.get("/", ctrlIndex.getIndex);

module.exports = indexRoutes;
