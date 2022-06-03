const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Update user information 
router.put("/:id", async (req, res)=>{
    if(req.body.userID === req.params.id) {
        try{
        
        
    }catch(err){
        res.status(500).json(err);
    }
} else {
    res.status(401).json("Action not permitted")
}
})

//Delete user account

module.exports = router