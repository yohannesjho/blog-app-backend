const sql = require('../database/db')
const createPost = async (title, content) => {
    try {
       const post =  sql`
        INSERT INTO posts(title,content)
        VALUES(${title, content})
        `;
    } catch (error) {
        throw error;
    }
}

module.exports = {createPost}
