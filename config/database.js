const mongoose = require("mongoose")
require("dotenv").config()

exports.connect = () =>{
    mongoose.connect(process.env.DATABASE_URL, )
    .then(() =>{
        console.log("Connected")
    })
    .catch((err) =>{
        console.log(err)
        console.log("Connection error")
        process.exit(0)
    })

}