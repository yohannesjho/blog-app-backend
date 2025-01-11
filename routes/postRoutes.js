const express = require('express');

const router = express.Router();

const authenticateToken = require('../middleware/authenticateToken')

const postControllers = require('../controllers/postControllers');

router.post('/createpost', authenticateToken, postControllers.createPost);

router.get('/getallposts', postControllers.getAllPosts)

module.exports = router;