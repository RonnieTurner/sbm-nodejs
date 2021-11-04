const Sequelize = require("sequelize");

const sequelize = new Sequelize("sbm-db", "dbUser", "dbPasswd", {
  dialect: postgreSQL,
  host: localhost,
});

module.exports = sequelize;
