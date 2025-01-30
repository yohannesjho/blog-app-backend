const express = require('express');

const router = express.Router();

const feedBackeControllers = require('../controllers/feedBackControllers')

router.post('/create',feedBackeControllers.createFeedback )

router.get('/feedbacks', feedBackeControllers.getFeedBacks)

module.exports = router