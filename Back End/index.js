const express = require('express')
const { Connection } = require('./Config/db');
const { userRoute } = require('./Routes/user.route');
const { productRouter } = require('./Routes/Product.route');
require("dotenv").config();
const app = express()
app.use(express.json())
app.use('/product',productRouter)
app.use('/user',userRoute)

app.listen(process.env.Port,async()=>{
    try {
        await Connection
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
})
