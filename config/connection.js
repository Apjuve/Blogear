const Sequelize = require('sequelize');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.SEQUELIZE_DB,
      process.env.SEQUELIZE_USER,
      process.env.SEQUELIZE_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    );
  }
  

module.exports = sequelize; 