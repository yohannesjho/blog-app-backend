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

module.exports = {createPost, getAllPosts}
