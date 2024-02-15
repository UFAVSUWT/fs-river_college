const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const News = sequelize.define("news", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.TEXT, allowNull: false },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  author: { type: DataTypes.STRING, allowNull: false },
  card: { type: DataTypes.STRING },
  main: { type: DataTypes.BOOLEAN, defaultValue: false },
  date: { type: DataTypes.DATE },
  page: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "STUDENT_LIFE",
  },
});
module.exports = {
  User,
  News,
};
