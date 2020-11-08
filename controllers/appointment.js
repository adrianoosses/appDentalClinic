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

exports.deleteAppointment =  (req, res) =>{
    let {id} = req.body;
    
    let q = `DELETE FROM APPOINTMENTS WHERE id = ${id}`;
    sequelize.query(q, {type: sequelize.QueryTypes.DELETE})
        .then(appointments => res.send(appointments))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'Problem deleting appointment.'
            })
        })   
}

exports.insert = (req, res) =>{
    let msg = 'Appointment added.';
        let {patient_id, doctor_id, hour, room, service, comments, price, status, createdAt, updatedAt
        } = req.body;
        let q = `INSERT INTO APPOINTMENTS (patient_id, doctor_id, hour, room, service, comments, 
            price, status, createdAt, updatedAt)
            VALUES ('${patient_id}', '${doctor_id}', '${hour}', '${room}', '${service}', '${comments}', 
            '${price}', '${status}',
            '${createdAt}', '${updatedAt}')`;
    sequelize.query(q, {type: sequelize.QueryTypes.INSERT})
    
    res.json({"message":msg}); 
    return true;
};