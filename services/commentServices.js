const sql = require('../database/db')

const createComment = async ( postId, userId ) => {
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
const updateComment = async ( id, userId, content ) => {
    try {
        const updatedComment = await sql`
        UPDATE comments
        SET content = ${content}
        WHERE id = ${id} AND user_id = ${userId}
        `

        return updatedComment
    } catch (error) {
        throw error
    }
}
const deletComment = async ( id, userId ) => {
    try {
        const deletedComment = await sql`
        DELETE FROM comments
        
        WHERE id = ${id} AND user_id = ${userId}
        `

        return deletedComment
    } catch (error) {
        throw error
    }
}

module.exports = { createComment, getComments, updateComment, deletComment}