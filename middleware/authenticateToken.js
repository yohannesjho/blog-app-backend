const jwt = require('jsonwebtoken')
const authenticateToken = (req, res, next) => {
         const token = req.headers.authorization.split(' ')[1]

         console.log("token from auth", token)

         if(!token){
            return res.status(400).json({message:"no token provided"})
         }

         jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err){
                res.status(400).json({message:"invalid token"})
            }

            req.user = user;
            console.log( user)

            next();
         })
}

module.exports = authenticateToken;