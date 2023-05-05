const express = require('express')
const { UserLogin, UserRegister,GetAllusers } = require('../Controllers/user.controller')
const userRoute= express.Router()


userRoute.post('/login',UserLogin)
userRoute.post('/register',UserRegister)
userRoute.get('/allusers',GetAllusers)



module.exports={
    userRoute
}