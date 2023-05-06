const express = require('express')
const { Connection } = require('./Config/db');
const { userRoute } = require('./Routes/user.route');
const cors = require('cors')
const { productRouter } = require('./Routes/Product.route');
const { orderRouter } = require('./Routes/orderhistory.route');
const { addressRouter } = require('./Routes/address.route');
require("dotenv").config();
const app = express()
app.use(cors())
app.use(express.json())
app.use('/cartproduct',productRouter)
app.use('/user',userRoute)
app.use('/order',orderRouter)
app.use('/address',addressRouter)
app.listen(process.env.Port,async()=>{
    try {
        await Connection
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
})
