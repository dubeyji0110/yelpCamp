const express = require('express');
const passport = require('passport');
const Users = require('../controllers/users');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();

router.route('/register')
    .get(Users.renderRegister)
    .post(catchAsync(Users.registerUser));

router.route('/login')
    .get(Users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), Users.loginUser);

router.get('/logout', Users.logoutUser);

module.exports = router;