const express = require('express');

const router = express.Router();

const postControllers = require('../controllers/postControllers');

router.post('/createpost', postControllers.createPost);

module.exports = router;