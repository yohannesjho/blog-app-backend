const userServices = require('../services/userServices')

const createUser = async (req,res) => {

    try {
        console.log(req.body)
        const {userName, email, password, role} = req.body

    
        if(!userName || !email || !password) {
           return res.status(400).json({message:"All fields are required!"})
        }

        const validRoles = ['user', 'admin'];
        const assignedRole = validRoles.includes(role) ? role : 'user';
    
        const user = await userServices.createUser(userName, email, password, assignedRole)
        
         

        res.status(201).json({message:"New user is created successfully!"})
        
    } catch (error) {
       
        res.status(500).json({message: error.message})
    }
}

const signInUser = async (req,res) => {
    try {
        const {email, password } = req.body;
        
        if(!email || !password) {
           return  res.status(400).json({message:"All fields are required!"})
        }

        const user = await userServices.signInUser(email,password)
        
        res.status(200).json({token:user})
    } catch (error) {
        
        res.status(error?.status || 500).json({message:error?.message || "server error!"})
    }
}

module.exports = { createUser, signInUser }