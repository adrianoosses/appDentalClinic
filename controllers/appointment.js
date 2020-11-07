const mysql = require('mysql2/promise');
//const {Appointment} = require('../models/appointment.js');
const {Appointment} = require('../models/index.js');

//console.log("apo2" + Appointment());

//const apo2 = apo1;
//console.log("Apo" + Appointment);


//const {Appointment} = require('sequelize');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dbclinic',
    password: '1234'
});

exports.getAllAppointments = (req, res) =>{
    res.send("Hola");
    /*
    Appointment.query(`SELECT * FROM APPOINTMENTS`)
    //apo1.query(`SELECT * FROM APPOINTMENTS`)
        .then(appointments => res.send(appointments))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'Problem getting appointments.'
            })
        })
        */
}