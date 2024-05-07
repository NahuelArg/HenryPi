const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  sequelize.define('Dogs', {
    id: {
      type: DataTypes.INTEGER, // Genera un UUID automáticamente al crear un nuevo registro
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed_group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temperament: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    fromDataBase: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    
  }, { timestamps: false });

  // Gancho para generar el UUID antes de crear un nuevo registro
  sequelize.models.Dogs.beforeCreate((dogs, options) => {
    dogs.id = uuidv4(); // Asigna un UUID generado automáticamente al campo 'id'
  });
};
