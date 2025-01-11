const express = require('express');

const router = express.Router();

const commentControllers = require('../controllers/commentControllers')
const authenticateToken = require('../middleware/authenticateToken')

router.post('/createcomment', authenticateToken, commentControllers.createComment);

router.get('/getcomments', authenticateToken, commentControllers.getComments);

router.put('/updatecomment', authenticateToken, commentControllers.updateComment);

router.delete('/deletecomment', authenticateToken, commentControllers.deletComment);


module.exports = router;