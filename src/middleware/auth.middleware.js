const userModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
   const token  = req.cookies.token;

   if(!token){
    res.status(401).json({
        message: "Unauthorize user access, plz login first"
    })
   }

   try {
   const decoded = jwt.verify(token, process.env.JWT_SECRET)

   const user = await userModel.findOne({
    _id:decoded.id
   })
   req.user = user
   next()

    res.status(200).json({
            message: "Post found successfully"
        })
    
   } catch (error) {
        res.status(401).json({
            message: "Invalid token login first"
        })
   }
}

module.exports = authMiddleware