'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    
    // Helper method for defining associations.
    // This method is not a part of Sequelize lifecycle.
    // The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
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
  //console.log("Appoint: " + Appointment);
  return Appointment;
};


/*
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

exports.Appointment = sequelize.define("appointment", {
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    hour: DataTypes.DATE,
    room: DataTypes.STRING,
    service: DataTypes.STRING,
    comments: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.ENUM('Pending', 'Completed', 'Cancelled')
});
*/
/*
(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();*/