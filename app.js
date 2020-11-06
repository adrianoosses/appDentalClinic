const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

// asignacion del puerto 3000 para el servidor
const PORT = 3000;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dbclinic'
})

// Importo el middleware de auth
const auth = require('./middleware/auth');


app.use(express.json());

//CORS
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});