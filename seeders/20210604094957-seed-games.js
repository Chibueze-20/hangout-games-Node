'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const games = [
      {
        name:"impostor",
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        name:"guess the drawing",
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ]
    return queryInterface.bulkInsert("Games",games)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
