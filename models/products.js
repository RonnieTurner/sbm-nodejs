const Sequlize = require('sequelize');

const sequelize = require('../utils/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequlize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productName: {
    type: Sequlize.STRING,
    allowNull: false
  },
  productType: Sequlize.STRING,

  cost: {
    type: Sequlize.DECIMAL(10, 2),
    allowNull: false
  },
})

module.export = Product
