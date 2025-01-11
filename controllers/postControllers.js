const postServices = require('../services/postServices')

const createPost = async (req,res) => {
    try {
        const {title, content} = req.body

        const  userId  = req.user.id

        if(!title || !content) {
           return res.status(400).json({message:"All fields are required!"})
        }

        const post = await postServices.createPost(userId, title, content)

        res.status(201).json({message:"new post is created successfully!"})
    } catch (error) {
        res.status(error?.status || 500).json({message:error?.message || "server error"})
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await postServices.getAllPosts()

        res.status(200).json({message:"here all posts", posts:posts})
    } catch (error) {
        res.status(error?.statatus || 500).json({message:error?.message || "server error"})
    }
}

const getPost = async (req, res) => {
    try {
        const userId = req.user.id

        const post = await postServices.getPost(userId)

        console.log('posts from controller', post)

        res.status(200).json({message:"here all your own posts", posts:post})
    } catch (error) {
        res.status(error?.status || 500).json({message:error?.message || 'server error'})
    }
}

const updatePost = async ( req, res) => {
    try {
        const { id, title, content } = req.body

        const userId = req.user.id

        const updatedPost = await postServices.updatePost(userId, id, title, content )

        res.status(200).json({message:"you updated your own post successfully!", updatedPost:updatedPost})
    } catch (error) {
        res.status(error?.status || 500).json({message:"server error"})
    }
}

const deletePost = async ( req, res ) => {
    try {
        const { id } = req.body

        const userId  = req.user.id
        const deletedPost = await postServices.deletePost( userId, id )

        res.status(200).json({message:"you deleted your own post successfully!"})
    } catch (error) {
        res.status(error?.status || 500).json({message:"server error"})
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
}