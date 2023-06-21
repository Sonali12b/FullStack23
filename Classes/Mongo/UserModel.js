const mongoose= require('mongoose')
const UserSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    email:String,
    mobile:Number
})
const UserModel=mongoose.model("user",UserSchema);
module.exports={UserModel};