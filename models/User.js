const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        text:true,
        type:String,
        unique:true
    },
    score:[{
            val:Number,
            level:String,
            time:Number
        }]
})

const User = mongoose.model("Users",UserSchema);

module.exports = User;