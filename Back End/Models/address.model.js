const mongoose= require('mongoose')
const OrderSchema = mongoose.Schema({
    state:String,
    pincode:Number,
    city:String,
    street:String,
    landmark:String,
    country:String,
    housenumber:Number,
    mobilenubmer:Number,
    userId:String
},{
    versionKey:false
})

const Address = mongoose.model('address',OrderSchema)
module.exports={
    Address
}