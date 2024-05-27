'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class showTime extends Model {
   
    static associate(models) {
      // define association here
      showTime.belongsTo(models.movies , {
        foreignKey:'movieId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      showTime.belongsTo(models.screens , {
        foreignKey:'screenId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      showTime.hasOne(models.bookingDetails , {
        foreignKey:'showtimeId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  showTime.init({
      movieId: DataTypes.INTEGER,
      screenId: DataTypes.INTEGER,
      showDate: DataTypes.DATE,
    showTime: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'showTime',
  });
  return showTime;
};