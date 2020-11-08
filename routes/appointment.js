const router = require('express').Router();
const {getAllAppointments, getPendingAppointments} = require('../controllers/appointment.js');

router.get('/getAll', getAllAppointments);
router.get('/getPending', getPendingAppointments);


exports.routes = router;