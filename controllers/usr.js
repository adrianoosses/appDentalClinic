
const {Usr, sequelize} = require('../models/index.js');
let jwt = require('jsonwebtoken');
let claveToken = "fdfdkjfd.sa#fjpdfjkl";
const chalk = require('chalk');

exports.getAllUsers = (req, res) =>{
    let q = `SELECT * FROM USRS`
    sequelize.query(q, {type: sequelize.QueryTypes.SELECT})
        .then(appointments => res.send(appointments))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'Problem getting users.'
            })
        })    
}

exports.register = (req, res) =>{
    let msg = 'User added.';
        let {name, password, token, last_name, email, role, address, dni, born, covid, history_id, 
            comments, defaulter, createdAt, updatedAt
        } = req.body;
        let q = `INSERT INTO USRS (name, password, token, last_name, email, role, address, dni, born, covid, 
            history_id, comments, defaulter, createdAt, updatedAt)
            VALUES ('${name}', '${password}', '${token}', '${last_name}', '${email}', '${role}', '${address}', 
            '${dni}', '${born}', ${covid}, ${history_id}, '${comments}', ${defaulter},
            '${createdAt}', '${updatedAt}')`;
    try{
        sequelize.query(q, {type: sequelize.QueryTypes.INSERT})
        res.status(200)
        .json({message:"Good" + msg});
    }catch{
        res.status(400)
        .json({error:"Wrong"});
    }
    return true;
};

let getUsersByEmail = async(req, res) =>{
    let {email} = req.body;
    console.log("getting user by email");
    let q = `SELECT * FROM USRS WHERE email='${email}'`;
    return sequelize.query(q, {type: sequelize.QueryTypes.SELECT})
}

let generateToken = (user)=>{
    console.log("generating token");
    let newUser = {
        email: user.email
    }
    console.log("email: " + newUser.email);
    return jwt.sign(newUser, claveToken, {expiresIn: 60 * 60 * 24})
}

exports.login = async(req, res) =>{
    console.log("Logging");
    let {email, password} = req.body;
    let usrByEmail = await getUsersByEmail(req, res);
    console.log("usrByEmail: " + usrByEmail);
    let resul = false;
    let msg = '';
    let token = '';
    let q = '';
    if(usrByEmail !=""){
        if(password == (usrByEmail)[0].password){
            console.log("correct pasword");
            token = generateToken((usrByEmail)[0]);
            q = `UPDATE USRS 
                SET token = '${token}'
                WHERE email = '${email}'`;
            sequelize.query(q, {type: sequelize.QueryTypes.UPDATE})
            console.log("Correct user and token. LOOGED");
            msg = "Correct user and token. LOOGED";
            //res.setHeader('Authorization', token);
            res.status(200).send({
                message: 'Good'.password,
                tokenSend: token
            });
            resul = true;
        }else{
            console.log("Wrong user or password");
            msg = "Wrong user or password";
            res.status(400).send({
                error: 'Wrong'
            });
            resul = false;
        }
    } else{
        //console.error(chalk.red(error))
        res.status(400).send({
            error: 'Wrong'
        });
        resul =  true;
    } 
    return resul;
};


exports.logout = async(req, res) =>{
    let {email} = req.body;
    let usrByEmail = await getUsersByEmail(req, res);
    console.log("usrByEmail: " + usrByEmail);
    let resul = false;
    let msg = '';
    let token = '';
    let q = '';
    if(usrByEmail !=""){
        q = `UPDATE USRS 
            SET token = ''
            WHERE email = '${email}'`;
        sequelize.query(q, {type: sequelize.QueryTypes.UPDATE})
        console.log("LOG OUT");
        msg = "Log out";
        resul = true;
    }else{
        console.log("Wrong user");
        msg = "Wrong";
        resul = false;
    }
    res.json({"msg":msg});
    return resul;
};