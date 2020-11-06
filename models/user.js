'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Appointment);
      this.hasOne(models.History);
    }
  };
  User.init({
    name: DataTypes.STRING,
    pass: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.ENUM('Admin', 'Doctor', 'Client'),
    address: DataTypes.STRING,
    dni: DataTypes.STRING,
    born: DataTypes.DATE,
    covid: DataTypes.BOOLEAN,
    history: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    defaulter: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};