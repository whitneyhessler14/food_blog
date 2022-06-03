const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
}).then(console.log("Connected")).catch(err=>console.log(err));

app.listen("5000", () => {
    console.log("Back end is running on port 5000")
})