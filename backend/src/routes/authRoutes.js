const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');
//const { login, register } = require('../controllers/authController'); // ✅



router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

module.exports = router;
