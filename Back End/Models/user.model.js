const mongoose= require('mongoose')


const UserSchema = mongoose.Schema({
    name:String,
    age:Number,
    password:String,
    gender:String,
    email:String
},{
    versionKey:false
})

const User = mongoose.model('user',UserSchema)
module.exports={
    User
}