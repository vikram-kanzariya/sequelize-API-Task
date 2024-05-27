'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here

      User.hasOne(models.bookingDetails , {
        foreignKey:'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  User.init({
    userName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    deletedAt:'destroyTime',
    modelName: 'User',
  });
  return User;
};