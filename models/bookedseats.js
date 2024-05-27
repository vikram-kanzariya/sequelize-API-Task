'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookedSeats extends Model {
  
    static associate(models) {

      bookedSeats.belongsTo(models.bookingDetails , {
        foreignKey:'bookingId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      bookedSeats.belongsTo(models.seatDetails , {
        foreignKey:'seatId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  bookedSeats.init({
    bookingId: DataTypes.INTEGER,
    seatId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bookedSeats',
  });
  return bookedSeats;
};