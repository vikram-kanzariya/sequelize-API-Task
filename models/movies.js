'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    
    static associate(models) {
      movies.hasMany(models.showTime , {
        foreignKey:'movieId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  movies.init({
    movieName: DataTypes.STRING,
    genre: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    releasedAt: DataTypes.DATE
  }, {
    sequelize,
    paranoid:true,
    deletedAt:'destroyTime',
    modelName: 'movies',
  });
  return movies;
};