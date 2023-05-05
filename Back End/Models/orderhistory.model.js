const mongoose= require('mongoose')


const OrderSchema = mongoose.Schema({
    time:String,
    title:String,
    price:Number,
    desc:String,
    category:String,
    brand:String,
    descountprice:String,
    quantity:Number,
    rating:String,
    images:String,
    userId:String
},{
    versionKey:false
})

const Order = mongoose.model('order',OrderSchema)
module.exports={
    Order
}