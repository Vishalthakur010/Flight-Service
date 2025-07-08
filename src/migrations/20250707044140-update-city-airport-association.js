'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports',{
      type: 'foreign key',
      fields:['cityId'],
      name:'city_fkey_constraints',
      references: {
        table: 'Cities',
        field: 'id'
      },
      onDelete:'CASCADE'
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','city_fkey_constraints')
  }
};


// Query to check if the constraint has been applied
// SELECT    TABLE_NAME,    COLUMN_NAME,    CONSTRAINT_NAME,    REFERENCED_TABLE_NAME,    REFERENCED_COLUMN_NAME  FROM    INFORMATION_SCHEMA.KEY_COLUMN_USAGE  WHERE    TABLE_NAME = 'Airports';