const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
let ap = require('./routes/appointment.js');
let us = require('./routes/usr.js');


// asignacion del puerto 3000 para el servidor
const PORT = process.env.PORT || 3000;
app.use(express.json());

//CORS
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, email");
    next();
});

app.use('/appointment', ap.routes);
app.use('/user', us.routes);
app.get('/', (req, res) => res.send('Welcome'));

app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));