const express = require('express');
const authController = require('../controllers/auth');
const studController = require('../controllers/stud');
const router = express.Router();
          
router.post('/register', authController.register );

router.post('/login', authController.login );

router.post('/student', studController.reg );
router.get('/logout', authController.logout );

module.exports = router;