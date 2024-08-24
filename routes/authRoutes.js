const express = require('express');
const router = express.Router();
const { deleteUser, register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.delete('/delete/:id', deleteUser)
module.exports = router;