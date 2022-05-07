'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bands', [{
      name: "Linkin Park",
      genre: "Rock",
      available_start_time: new Date(),
       end_time: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bands', nullname, {});
  }
};