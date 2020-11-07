
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

exports.login = async(req, res) =>{
    let password = req.body.password;
    let usrLoginString = await getUsersByBody(req, res);
    let resul = false;
    let msg = "";
    if(usrLoginString !== undefined && usrLoginString !== null){
        if(usrLoginString.pass === password){
            console.log("Correct user and token. LOOGED");
            msg = "Logged";
            resul = true;
        } else{
            console.log("Wrong user or password ");
            msg = "Not logged";
            resul = false;
        }
    }else{
        msg = "ERROR";
    }
    res.json({"msg":msg});
    return resul;
};