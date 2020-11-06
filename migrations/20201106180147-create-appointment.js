'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER
      },
      hour: {
        type: Sequelize.DATE
      },
      room: {
        type: Sequelize.STRING
      },
      service: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.ENUM('Pending', 'Completed', 'Cancelled')
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Appointments');
  }
};