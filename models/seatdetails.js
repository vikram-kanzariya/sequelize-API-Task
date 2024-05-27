'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seatDetails extends Model {
   
    static associate(models) {
      // define association here

      seatDetails.belongsTo(models.screens , {
        foreignKey:'screenId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      seatDetails.hasMany(models.bookedSeats , {
        foreignKey:'seatId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  seatDetails.init({
    screenId: DataTypes.INTEGER,
    seatNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seatDetails',
  });
  return seatDetails;
};