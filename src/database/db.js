const { Sequelize } = require("sequelize");

const dbName = process.env.DB_NAME;
const dbUserName = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
  dialectOptions: {
    encrypt: true,
  },
});

const DBTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("Se pudo conectar a la base de datos.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
};

module.exports = { sequelize, DBTest };
