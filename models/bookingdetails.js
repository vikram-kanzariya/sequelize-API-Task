'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookingDetails extends Model {
   
    static associate(models) {
      // define association here
      bookingDetails.belongsTo(models.User , {
        foreignKey:'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      bookingDetails.belongsTo(models.showTime , {
        foreignKey:'showtimeId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      bookingDetails.hasMany(models.bookedSeats , {
        foreignKey:'bookingId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  bookingDetails.init({
    userId: DataTypes.INTEGER,
    showtimeId: DataTypes.INTEGER,
    bookingDate: DataTypes.DATE,
    bookingAmount: DataTypes.INTEGER,
    paymentStatus: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'bookingDetails',
  });
  return bookingDetails;
};