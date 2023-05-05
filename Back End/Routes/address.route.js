
const express = require('express')
const { Auth } = require('../Middleware/Auth')
const { AddNewAddress, GetAllAddress,deleteaddress } = require('../Controllers/address.controller')
const addressRouter= express.Router()

addressRouter.post('/',Auth,AddNewAddress)
addressRouter.get('/',Auth,GetAllAddress)
addressRouter.delete('/:id',Auth,deleteaddress)



module.exports={
    addressRouter
}