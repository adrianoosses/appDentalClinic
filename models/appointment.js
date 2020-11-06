'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Appointment.init({
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    hour: DataTypes.DATE,
    room: DataTypes.STRING,
    service: DataTypes.STRING,
    comments: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.ENUM('Pending', 'Completed', 'Cancelled')
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};