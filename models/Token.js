const mongoose = require('mongoose')
const TokenSchema = new mongoose.Schema(
    {
        key:String,
        user:{
            type:mongoose.Types.ObjectId,
            ref:"User",
            required:true,
            unique:true,
        }
    }
)
module.exports = new mongoose.model("Token",TokenSchema)