'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_colors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      color_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue:1,
        comment:"1=>active"
      },
      is_deleted: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        comment:"1=>deleted"
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
    await queryInterface.dropTable('product_colors');
  }
};