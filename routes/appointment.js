const router = require('express').Router();
const {getAllAppointments, getPendingAppointments, 
    deleteAppointment, insert} = require('../controllers/appointment.js');

router.get('/getAll', getAllAppointments);
router.get('/getPending', getPendingAppointments);
router.delete('/delete', deleteAppointment);
router.post('/insert', insert);


exports.routes = router;