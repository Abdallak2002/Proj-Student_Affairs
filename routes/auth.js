const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// صفحة تسجيل الدخول
router.get('/login', (req, res) => {
  res.render('login');
});

//  تسجيل الدخول
router.post('/login', passport.authenticate('local', { successRedirect: '/profile', failureRedirect: '/login' }));

// صفحة تسجيل الخروج
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

// لو المستخدم دا ينفع يدخل بدخله لو لا برجعه ل login 
router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
