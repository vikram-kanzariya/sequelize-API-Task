'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookingDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model:'Users' , key:'id' }
      },
      showtimeId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model:'showTimes' , key:'id' }
      },
      bookingDate: {
        type: Sequelize.DATE
      },
      bookingAmount: {
        type: Sequelize.INTEGER
      },
      paymentStatus: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookingDetails');
  }
};