'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM('Admin', 'Doctor', 'Client')
      },
      address: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      born: {
        type: Sequelize.DATE
      },
      covid: {
        type: Sequelize.BOOLEAN
      },
      history_id: {
        type: Sequelize.INTEGER
      },
      observations: {
        type: Sequelize.STRING
      },
      defaulter: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};