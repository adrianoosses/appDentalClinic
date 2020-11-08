'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Userc.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.ENUM('Admin', 'Doctor', 'Client'),
    address: DataTypes.STRING,
    dni: DataTypes.STRING,
    born: DataTypes.DATE,
    covid: DataTypes.BOOLEAN,
    history_id: DataTypes.INTEGER,
    observations: DataTypes.STRING,
    defaulter: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Userc',
  });
  return Userc;
};