const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Dogs', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    life_span: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};