const commentServices = require('../services/commentServices')

const createComment = async ( req, res ) => {
    try {
       const  { postId, content } = req.body
       console.log(req.body)

       const userId = req.user.id

       const comment = await commentServices.createComment( userId, postId, content)

       res.status(201).json({message:"you post a comment successfully!", comment: comment})
    } catch (error) {
         
        res.status(error?.status || 500).json({message:"server error"})
    }
}

const getComments = async ( req, res ) => {
    try {
       const   postId  = req.params.id

       

       const comment = await commentServices.getComments( postId )

        

       res.status(201).json({message:"the comments are", comment: comment})
    } catch (error) {
        res.status(error?.status || 500).json({message:"server error"})
    }
}

const updateComment = async ( req, res ) => {
    try {
        console.log(req.body)
       const  {  content } = req.body

       const commentId = req.params.id

       const userId = req.user.id

       const updatedComment = await commentServices.updateComment( userId, commentId, content)

       res.status(201).json({message:"you updated the comment successfully!"})
    } catch (error) {
        res.status(error?.status || 500).json({message:"server error"})
    }
}
const deletComment = async ( req, res ) => {
    try {
       const  commentId  = req.params.id

       const userId = req.user.id

       const deletedComment = await commentServices.deletComment( commentId, userId)

       res.status(201).json({message:"you deleted the comment successfully!"})
    } catch (error) {
        res.status(error?.status || 500).json({message:"server error"})
    }
}

module.exports = { createComment, getComments,  updateComment, deletComment}