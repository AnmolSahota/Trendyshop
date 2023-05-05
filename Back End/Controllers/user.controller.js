
const { User } = require('../Models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require("dotenv").config();

const UserRegister = async (req, res) => {
    const { name, password, email, gender, age } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) =>{
            const NewUserRegisteration = new User({name,email,gender,age,password:hash})
            await NewUserRegisteration.save()
            res.status(200).send({ "msg": "Account has been created successfully" })
        })

    } catch (error) {
        res.status(400).send({ "msg": error })
    }



}
const UserLogin = async(req, res) => {
const{email,password}=req.body
    try {
        const Logindata = await User.findOne({email})
        bcrypt.compare(password, Logindata.password, function(err, result) {
            if(result){
                const token = jwt.sign({ userId: Logindata._id }, process.env.SecretKey)
                res.status(200).send({"Token":token})
            }else{
                res.status(400).send({"msg":"Wrong Credential"})
            }           
        })
    } catch (error) {
                res.status(400).send(error)        
    }
}


const GetAllusers = async (req, res) => {
    try {
       const allusers= await User.find() 
        res.status(200).send(allusers)
    } catch (error) {
        res.status(400).send({ "msg": error })
    }

}


module.exports = {
    UserLogin, UserRegister,GetAllusers
}