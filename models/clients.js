const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Client = sequelize.define("client", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  addressStreet: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  addressCity: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  addressState: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: Sequelize.STRING,

  onBoardDate: Sequelize.STRING, 

  marketMethod: Sequelize.STRING,

  frequency: Sequelize.STRING,
  
  dayOfWeek: Sequelize.STRING,

  timeOfDay: Sequelize.STRING,

  bidValue: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Client
