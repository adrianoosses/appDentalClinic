const router = require('express').Router();
const {getAllAppointments} = require('../controllers/appointment.js');

router.get('/getAll', getAllAppointments);


exports.routes = router;