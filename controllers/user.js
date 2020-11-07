
const {User, sequelize} = require('../models/index.js');

exports.getAllUsers = async (req, res) =>{
    let q = `SELECT * FROM USERS`
    sequelize.query(q, {type: sequelize.QueryTypes.SELECT})
    //apo1.query(`SELECT * FROM APPOINTMENTS`)
        .then(appointments => res.send(appointments))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'Problem getting appointments.'
            })
        })
        
}