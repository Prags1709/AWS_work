const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("blog", "admin", "masai123", {
  host: "database-1.cdrxkscblr0o.ap-northeast-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
      max: 10,
      min: 0,
      idle: 10000,
  }
})

module.exports = { sequelize };
