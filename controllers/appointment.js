const {Appointment, sequelize} = require('../models/index.js');

exports.getAllAppointments =  (req, res) =>{
    sequelize.query(`SELECT * FROM APPOINTMENTS`, {type: sequelize.QueryTypes.SELECT})
        .then(appointments => res.send(appointments))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'Problem getting appointments.'
            })
        })
}

exports.getPendingAppointments =  (req, res) =>{
    let q = `SELECT * FROM APPOINTMENTS WHERE hour > CURRENT_TIME AND status = 'Pending'`;
    sequelize.query(q, {type: sequelize.QueryTypes.SELECT})
        .then(appointments => res.send(appointments))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'Problem getting appointments.'
            })
        })
}
