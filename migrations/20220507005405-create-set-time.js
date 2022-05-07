'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
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
    await queryInterface.dropTable('set_times');
  }
};