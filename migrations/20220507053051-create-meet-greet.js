'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id:{
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'events',
          key: 'id'
        }
      },
      band_id:{
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'bands',
          key: 'id'
        }
      }
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};