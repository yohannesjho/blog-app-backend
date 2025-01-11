const sql = require('../database/db')

const createComment = async (  userId, postId, content ) => {
    try {
        const comment = await sql`
        INSERT INTO comments(post_id, user_id, content)
        VALUES(${postId}, ${userId}, ${content})
        RETURNING post_id, user_id, content, created_at
        `

        return comment
    } catch (error) {
        throw error
    }
}

const getComments = async ( postId ) => {
    try {
        const comments = await sql`
        SELECT user_id, content, created_at
        FROM comments
        WHERE post_id = ${postId}
        `

        return comments
    } catch (error) {
        throw error
    }
}
const updateComment = async (userId, commentId, content ) => {
    try {
        const updatedComment = await sql`
        UPDATE comments
        SET content = ${content}
        WHERE id = ${commentId} AND user_id = ${userId}
        `

        return updatedComment
    } catch (error) {
        throw error
    }
}
const deletComment = async ( commentId, userId ) => {
    try {
        const deletedComment = await sql`
        DELETE FROM comments
        
        WHERE id = ${commentId} AND user_id = ${userId}
        `

        return deletedComment
    } catch (error) {
        throw error
    }
}

module.exports = { createComment, getComments, updateComment, deletComment}