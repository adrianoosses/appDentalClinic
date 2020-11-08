
const {Userc, sequelize} = require('../models/index.js');

exports.getAllUsers = (req, res) =>{
    let q = `SELECT * FROM USERCS`
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

exports.register = (req, res) =>{
    let msg = 'User added.';
    /*
    let {name, password, last_name, email, role, address, dni, born, covid, history_id, comment, 
        defaulter, allergies, createdAt, updatedAt
    } = req.body;
    
    let q = `INSERT INTO USERCS (name, password, last_name, email, role, address, dni, born, covid, history_id,
        comment, defaulter, allergies, createdAt, updatedAt)
        VALUES ('${name}', '${password}', '${last_name}', '${email}', '${role}', '${address}', '${dni}', 
        '${born}', ${covid}, ${history_id}, '${comment}', ${defaulter}, '${allergies}', 
        '${createdAt}', '${updatedAt}')`; */
        let {name, password, last_name, email, role, address, dni, born, covid, history_id, observations,
            defaulter, createdAt, updatedAt
        } = req.body;
        let q = `INSERT INTO USERCS (name, password, last_name, email, role, address, dni, born, covid, 
            history_id, observations, defaulter, createdAt, updatedAt)
            VALUES ('${name}', '${password}', '${last_name}', '${email}', '${role}', '${address}', 
            '${dni}', '${born}', ${covid}, ${history_id}, '${observations}', ${defaulter},
            '${createdAt}', '${updatedAt}')`;
    sequelize.query(q, {type: sequelize.QueryTypes.INSERT})
    
    res.json({"message":msg}); 
    return true;
};

let getUsersByEmail = async(req, res) =>{
    let {email} = req.body;
    let q = `SELECT * FROM USERCS WHERE email='${email}'`;
    return sequelize.query(q, {type: sequelize.QueryTypes.SELECT})
}

exports.login = async(req, res) =>{
    let {password} = req.body;
    let usrByEmail = await getUsersByEmail(req, res);
    let resul = false;
    let msg = "";
    if(usrByEmail !=""){
        if(password === (usrByEmail)[0].password){
            console.log("Correct user and token. LOOGED");
            msg = "Correct user and token. LOOGED";
            resul = true;
        }else{
            console.log("Wrong user or password");
            msg = "Wrong user or password";
            resul = false;
        }
    } else{
        msg = "Wrong user or password";
        resul =  true;
    }
    res.json({"msg":msg});
    return resul;
};

