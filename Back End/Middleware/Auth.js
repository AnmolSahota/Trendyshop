require("dotenv").config();
const jwt = require('jsonwebtoken');
const Auth = (req,res,next)=>{
    const{ token } = req.headers
    if(token){
        jwt.verify(token.split(" ")[1], process.env.SecretKey, function(err, decoded) {
            if(decoded){
                req.body.userId=decoded.userId 
                next()
            }else{
                res.status(400).send("you are not Authorized")
            }
        })
    }else{
        res.status(400).send("Invalid Token")
    }
    
}

module.exports={
    Auth
}