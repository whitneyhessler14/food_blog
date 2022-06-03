const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },photo:{
        type:String,
        required:true
    }, username:{
        type:String,
        default:true
    }
},{timestamps:true})

module.exports = mongoose.model("Post", PostSchema);