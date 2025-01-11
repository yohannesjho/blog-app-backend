const postServices = require('../services/postServices')

const createPost = async (req,res) => {
    try {
        const {title, content} = req.body

        if(!title || !content) {
           return res.status(400).json({message:"All fields are required!"})
        }

        const post = await postServices.createPost(title, content)

        res.status(201).json({message:"new post is created successfully!"})
    } catch (error) {
        res.status(error?.status || 500).json({message:error?.message || "server error"})
    }
}

module.exports = {
    createPost,
}