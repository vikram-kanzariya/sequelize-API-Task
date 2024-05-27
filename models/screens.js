'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class screens extends Model {
   
    static associate(models) {
      // define association here
      screens.belongsTo(models.theatre , {
        foreignKey:'theatreId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      screens.hasMany(models.showTime ,{
        foreignKey:'screenId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      screens.hasMany(models.seatDetails , {
        foreignKey:'screenId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  screens.init({
    theatreId: DataTypes.INTEGER,
    screenNumber: DataTypes.INTEGER,
    totalSeats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'screens',
  });
  return screens;
};