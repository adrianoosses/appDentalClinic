const router = require('express').Router();
const {getAllUsers} = require('../controllers/user.js');

router.get('/getAll', getAllUsers);


exports.routes = router;