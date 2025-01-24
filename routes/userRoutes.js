const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/userControllers');

router.post('/signup',userControllers.createUser);

router.post('/signin', userControllers.signInUser)

router.get('/user/:id', userControllers.getUser)

module.exports = router;