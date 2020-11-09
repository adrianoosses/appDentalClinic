const router = require('express').Router();
const {getAllAppointments, getPendingAppointments, 
    deleteAppointment, insert} = require('../controllers/appointment.js');
const {isAdmin, auth} = require('../middlewares/auth.js');

router.get('/getAll', isAdmin, getAllAppointments);
router.get('/getPending', getPendingAppointments);
router.delete('/delete', isAdmin, deleteAppointment);
router.post('/insert', isAdmin, insert);


exports.routes = router;