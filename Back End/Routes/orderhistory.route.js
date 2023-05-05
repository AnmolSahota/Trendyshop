const express = require('express')
const { Auth } = require('../Middleware/Auth')
const { Bookorder, Getorder } = require('../Controllers/orderhistory.controller')
const orderRouter= express.Router()

orderRouter.post('/',Auth,Bookorder)
orderRouter.get('/',Auth,Getorder)


module.exports={
    orderRouter
}