const router = require('express').Router();
const {getAllAppointments, getPendingAppointments, 
    deleteAppointment, insert, getMyPendingAppointments} = require('../controllers/appointment.js');
const {isAdmin, auth} = require('../middlewares/auth.js');

router.get('/getAll', isAdmin, getAllAppointments);
router.get('/getMy', getMyPendingAppointments);
router.get('/getPending', isAdmin, getPendingAppointments);
router.delete('/delete', isAdmin, deleteAppointment);
router.post('/insert', isAdmin, insert);
exports.routes = router;