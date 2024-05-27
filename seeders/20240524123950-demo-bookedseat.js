'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
   await queryInterface.bulkInsert('bookedSeats' , [
    {
      bookingId:2,
      seatId:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      bookingId:2,
      seatId:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      bookingId:1,
      seatId:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
