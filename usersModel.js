const Sequelize = require('sequelize');
const db = require('./db/db');

const User = db.define('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  });

module.exports = User