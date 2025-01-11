const sql = require("../database/db");
const bcrypt = require("bcrypt");

const createUser = async (username, email, password) => {
  try {

    
    // Check if the user already exists
    const userExists = await sql`SELECT email FROM users WHERE email = ${email}`;

    console.log('from service',userExists )

    if (userExists.length > 0) {
      throw new Error("Email is occupied");
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    

    // Insert the new user into the database
    const result = await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${hashedPassword})
      RETURNING id, username, email;
    `;
    console.log('inserted user', result)
    return result[0]; // Return the inserted user
  } catch (error) {
    
    throw new Error("Database error: " + error.message);
  }
};

const signInUser = async (email, password) => {
  try {
    // Fetch the user from the database
    const user = await sql`
      SELECT id, email, password FROM users
      WHERE email = ${email}
    `;

    
    if (user.length === 0) {
      throw  {message:"Invalid credentials", status:400};
    }

    // Compare the provided password with the stored hashed password
    const isMatched = await bcrypt.compare(password, user[0].password);

    if (!isMatched) {
      throw  {message:"Invalid credentials", status:400};
    }

    
    // Return the user details (excluding the password for security reasons)
    return {
      id: user[0].id,
      email: user[0].email,
    };
  } catch (error) {
    console.log("service error",error)
    throw error;
  }
};

module.exports = {
  createUser,
  signInUser,
};
