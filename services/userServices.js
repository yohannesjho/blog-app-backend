const sql = require("../database/db");

const createUser = async (username, email, password) => {
  try {
    const result = await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${password})
      RETURNING id, username, email;
    `;
    return result[0]; // Return the inserted user
  } catch (error) {
    throw new Error("Database error: " + error.message);
  }
};

module.exports = {
  createUser,
};
