'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stages', [{
      name: 'Colorful Stage',
    }])
  },

   down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', nullname, {})
  }
};
