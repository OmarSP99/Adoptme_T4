const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/login', function(req, res) {
    res.render('login');
});

router.get('/auth/google/login', function(req, res) {
    res.send("Log In with Google");
});

router.get('/auth/google/redirect', function(req, res) {
    res.send("text");
});

router.get('/auth/google/logout', function(req, res) {
    res.send("text");
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports = router;