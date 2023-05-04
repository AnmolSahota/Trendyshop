const express = require('express')
const { UserLogin, UserRegister } = require('../Controllers/user.controller')
const userRoute= express.Router()


userRoute.post('/login',UserLogin)
userRoute.post('/register',UserRegister)


module.exports={
    userRoute
}