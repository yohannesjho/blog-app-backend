const sql = require('../database/db')

const createFeedback = async (name, email, message) => {
    console.log(name, email, message)
    try {
        const feedback = await sql`
  INSERT INTO feedbacks(name, email, message)
  VALUES (${name}, ${email}, ${message})
  RETURNING name, message;
`;

        console.log(feedback)
        return feedback
    } catch (error) {
        throw error
    }
}

const getFeedBacks = async () => {
    try {
        const feedBacks = await sql`
        SELECT  name, email, message, created_at
        FROM feedbacks
        `
        return getFeedBacks;
    } catch (error) {
        throw error
    }
}

module.exports = { createFeedback, getFeedBacks }