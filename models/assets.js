const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Asset = sequelize.Define('asset', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  assetType: Sequelize.STRING,

  assetName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cost: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  purchaseDate: Sequelize.DATE,

  serialNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

module.exports = Asset
