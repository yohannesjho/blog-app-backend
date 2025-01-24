const express = require('express');

const router = express.Router();

const commentControllers = require('../controllers/commentControllers')
const authenticateToken = require('../middleware/authenticateToken')

router.post('/createcomment', authenticateToken, commentControllers.createComment);

router.get('/getcomments/:id', authenticateToken, commentControllers.getComments);

router.put('/updatecomment/:id', authenticateToken, commentControllers.updateComment);

router.delete('/deletecomment/:id', authenticateToken, commentControllers.deletComment);


module.exports = router;