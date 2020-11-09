const router = require('express').Router();
const {isAdmin} = require('../middlewares/auth.js');
const {
    getAllUsers, 
    register,
    login,
    logout
} = require('../controllers/usr.js');

router.get('/getAll', isAdmin, getAllUsers);
router.post('/register', register);
router.get('/login', login);
router.get('/logout', logout);

exports.routes = router;