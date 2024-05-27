'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class theatre extends Model {
 
    static associate(models) {
      theatre.hasMany(models.screens , {
        foreignKey:'theatreId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        scope:{
          screensNumber:1
        },
        as:"Scopes"
      })
    }
  }
  theatre.init({
    theatreName: DataTypes.STRING,
    totalScreens: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    deletedAt:'destroyTime',
    modelName: 'theatre',
  });
  return theatre;
};