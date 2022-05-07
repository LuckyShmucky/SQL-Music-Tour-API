'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('events', [{
    name: 'Rock and Roll Convention',
    date: new Date(),
    start_time: new Date(),
    end_time: new Date()
  }])
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('events', nullname, {})
  }
};
