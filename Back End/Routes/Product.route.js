
const express = require('express')
const { CartPostProduct } = require('../Controllers/Product.controller')
const { Auth } = require('../Middleware/Auth')
const productRouter= express.Router()

productRouter.post('/',CartPostProduct)


module.exports={
    productRouter
}