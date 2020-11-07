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
