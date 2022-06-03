const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
}).then(console.log("Connected")).catch(err=>console.log(err));

app.use("/back-end/auth", authRoute)

app.listen("5000", () => {
    console.log("Back end is running on port 5000")
})