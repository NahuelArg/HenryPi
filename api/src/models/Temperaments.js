const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Temperaments', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement:true,
      unique: true
    },
    name: {
      type: DataTypes.STRING
    }
  });
};