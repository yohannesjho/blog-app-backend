const sql = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const createUser = async (username, email, password, assignedRole) => {
  try {

    
    // Check if the user already exists
    const userExists = await sql`SELECT email FROM users WHERE email = ${email}`;

     

    if (userExists.length > 0) {
      throw new Error("Email is occupied");
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    

    
    // Insert the new user into the database
    const result = await sql`
      INSERT INTO users (username, email, password, role)
      VALUES (${username}, ${email}, ${hashedPassword}, ${assignedRole})
      RETURNING id, username, email, role;
    `;
    
    return result[0]; // Return the inserted user
  } catch (error) {
    throw new Error(  error.message );
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

    const token = jwt.sign({id:user[0].id, email:user[0].email}, process.env.JWT_SECRET, {expiresIn:"1hr"})
    // Return the user details (excluding the password for security reasons)
    return token;
  } catch (error) {
    
    throw error;
  }
};

module.exports = {
  createUser,
  signInUser,
};
