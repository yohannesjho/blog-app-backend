const express = require('express');

const router = express.Router();

const upload = require('../configs/multerConfig')


const authenticateToken = require('../middleware/authenticateToken')

const postControllers = require('../controllers/postControllers');


router.post('/createpost',  authenticateToken, upload.single('image'), postControllers.createPost);

router.get('/getallposts', postControllers.getAllPosts)

router.get('/getpost/:id', authenticateToken, postControllers.getPost)

router.put('/updatepost/:id', authenticateToken, upload.single('image'), postControllers.updatePost)

router.delete('/deletepost/:id', authenticateToken, postControllers.deletePost)



module.exports = router;