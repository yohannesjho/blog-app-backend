const sql = require('../database/db')
const createPost = async (userId, title, content, imageUrl) => {

    console.log(userId)
    try {
       const post = await sql`
        INSERT INTO posts(title, content, user_id, img_url)
        VALUES(${title}, ${content}, ${userId}, ${imageUrl})
        `;

         
    } catch (error) {
        throw error;
    }
}

const getAllPosts = async () => {
       try {
        const posts = await sql`
         SELECT id, user_id, title, content,img_url, created_at

         FROM posts
        `
     
        return posts;
       } catch (error) {
        throw error
       }
}

const getPost = async ( userId, blogId ) => {
     
    try {

        const post = await sql`
        SELECT  title, content, img_url, created_at

        FROM posts

        WHERE   id = ${blogId} 
        `
       
        return post
    } catch (error) {
        throw error
    }
}

const updatePost = async ( userId, blogId, title, content, imageUrl) => {
    try {
       
        const updatedPost = await sql`
        UPDATE posts
        SET 
            title = ${title}, 
            content = ${content}
            ${imageUrl ? sql`, img_url = ${imageUrl}` : sql``}
        WHERE user_id = ${userId} AND id = ${blogId}
        RETURNING user_Id, title, content, img_url
    `;
    
       return updatedPost;
    } catch (error) {
        throw error
    }
}

const deletePost = async ( userId, id ) => {
    console.log( userId, id )
    try {
        const deletedPost = await sql`
        DELETE FROM posts
        WHERE user_id = ${userId} AND id = ${id}
        RETURNING *
        `
     
        return deletedPost
    } catch (error) {
        throw error
    }
}

module.exports = {createPost, getAllPosts, getPost, updatePost, deletePost}
