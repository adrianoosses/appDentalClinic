const {sequelize} = require('../models/index.js');
var jwt = require('jsonwebtoken');
let claveToken = "fdfdkjfd.sa#fjpdfjkl";

exports.auth = async (req, res, next) => {
    let {email} = req.body;
    const token = req.headers.authorization;
    let q = `SELECT token FROM USRS WHERE email='${email}'`;
    let tokenDb = sequelize.query(q, {type: sequelize.QueryTypes.SELECT})
    if(!token) return res.json({error:"Send a token for authorization."});
    else if((await tokenDb)[0].token === token){ 
        next();
    } else{
         console.log("Unathorized");
         res.json({error:"Unauthorized."})
    }
}

exports.isAdmin = async (req, res, next) => {
    let {authorization, email} = req.headers;
    let dataToken = jwt.verify(authorization, claveToken)
    let q = `SELECT role FROM USRS WHERE email='${dataToken.email}'`;
    let roleDb = sequelize.query(q, {type: sequelize.QueryTypes.SELECT});
    console.log("roleDb"+ (await roleDb)[0].role);
    if( (await roleDb)[0].role === 'Admin'){
        console.log("User is admin.");
        next();
    } else{
        console.log("ERROR: User is not admin.");
        res
        .status(400)
        .json({error:"ERROR: not authorized."})

    }
}