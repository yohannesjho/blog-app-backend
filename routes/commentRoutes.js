const express = require('express');

const router = express.Router();

const commentControllers = require('../controllers/commentControllers')
const authenticateToken = require('../middleware/authenticateToken')

router.post('/createcomment', authenticateToken, commentControllers.createComment);

router.get('/getcomments', authenticateToken, commentControllers.getComments);

router.post('/updatecomment', authenticateToken, commentControllers.updateComment);

router.post('/deletecomment', authenticateToken, commentControllers.deletComment);


module.exports = router;