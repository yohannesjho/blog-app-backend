const commentServices = require('../services/commentServices')

const createComment = async ( req, res ) => {
    try {
       const  { id, content } = req.body

       const comment = await commentServices.createComment( id, content)

       res.status(201).json({message:"you post a comment successfully!", comment: comment})
    } catch (error) {
        res.status(error?.status || 500).json({message:"server error"})
    }
}

const getComments = async ( req, res ) => {
    try {
       const  { postId } = req.body

       const comment = await commentServices.getComments( postId )

       res.status(201).json({message:"the posts are", comment: comment})
    } catch (error) {
        res.status(error?.status || 500).json({message:"server error"})
    }
}

const updateComment = async ( req, res ) => {
    try {
       const  { id, content } = req.body

       const userId = req.user.id

       const updatedComment = await commentServices.updateComment( userId, id, content)

       res.status(201).json({message:"you updated the comment successfully!"})
    } catch (error) {
        res.status(error?.status || 500).json({message:"server error"})
    }
}
const deletComment = async ( req, res ) => {
    try {
       const  { id } = req.body

       const userId = req.user.id

       const deletedComment = await commentServices.deletComment( id, userId)

       res.status(201).json({message:"you deleted the comment successfully!"})
    } catch (error) {
        res.status(error?.status || 500).json({message:"server error"})
    }
}

module.exports = { createComment, getComments,  updateComment, deletComment}