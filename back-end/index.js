const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts")
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL, {
}).then(console.log("Connected")).catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"images");
    },
    filename: (req, file, cb) => {
    cb(null, req.body.name);
    },
});

const upload = multer({storage:storage})
app.post("/back-end/upload", upload.single("file"), (req, res) => {
    res.status(200).json("Photo uploaded");
});

app.use("/back-end/auth", authRoute);
app.use("/back-end/users", userRoute);
app.use("/back-end/posts", postRoute);

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Back end is running on port 5000")
})