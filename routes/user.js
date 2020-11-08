const router = require('express').Router();
const {
    getAllUsers, 
    register,
    login
} = require('../controllers/user.js');

router.get('/getAll', getAllUsers);
router.post('/register', register);
router.get('/login', login);


exports.routes = router;