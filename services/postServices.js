const sql = require('../database/db')
const createPost = async (userId, title, content) => {

    console.log(userId)
    try {
       const post = await sql`
        INSERT INTO posts(title, content, user_id)
        VALUES(${title}, ${content}, ${userId})
        `;

         
    } catch (error) {
        throw error;
    }
}

const getAllPosts = async () => {
       try {
        const posts = await sql`
         SELECT user_id, title, content, created_at

         FROM posts
        `
    console.log('posts from service', posts)
        return posts;
       } catch (error) {
        throw error
       }
}

const getPost = async ( userId ) => {
    try {
        const post = sql`
        SELECT user_id, title, content, created_at

        FROM posts

        WHERE user_id = ${userId}
        `

        return post
    } catch (error) {
        throw error
    }
}

const updatePost = async ( userId, id, title, content) => {
    try {
       const updatedPost =  await sql`
        UPDATE posts
        SET title = ${title}, content = ${content}
        WHERE user_id = ${userId} AND id = ${id}
        RETURNING user_Id, title, content
        `

        console.log('updated post from service', updatedPost)
       return updatedPost;
    } catch (error) {
        throw error
    }
}

module.exports = {createPost, getAllPosts, getPost, updatePost}
