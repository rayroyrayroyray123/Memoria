const express = require('express');

const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
const checkAuth = require('../middleWare/auth-check')

const router = express.Router();

router.post(
    '/signup',
    [
        check('username')
            .not()
            .isEmpty(),
        check('email')
            .normalizeEmail()
            .isEmail(),
        check('password').isLength({ min: 6 })
    ],
    usersController.signup
  );

router.post('/login', usersController.login);

// router.use(checkAuth);

router.post('/userprofile', usersController.getUser);

router.post('/userprofileEdit', usersController.edit);
  
module.exports = router;