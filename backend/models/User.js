const mongoose = require ('mongoose')
const { Schema } = mongoose;
const UserSchema =new Schema ({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        default:Date.Now
    }
})
module.exports = mongoose.model('user',UserSchema)