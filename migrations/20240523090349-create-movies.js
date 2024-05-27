'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieName: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.TEXT
      },
      releasedAt:{
        type:Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW()
      },
      updatedAt: {
        // allowNull: false,
        type: Sequelize.DATE,
        defaultValue:null
      },
      destroyTime:{
        type:Sequelize.TIME
      },
    }
  );

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};