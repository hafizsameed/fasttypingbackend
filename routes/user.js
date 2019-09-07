const express=require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/addUser",(req,res)=>{
    const user=req.body;
    const newUser = new User(user);
    newUser.save().then(()=>{
        res.send({message:"user added"})
    })
    .catch((e)=>{
        res.send({message:e.message})
    })
})

router.post("/getUser",(req,res)=>{
    const name = req.body.name;
    const user = User.find(name)
    user.then((user)=>{
        res.send({result:user})
    })
    .catch((e)=>{
        res.send({message:e.message});
    })
})

router.get("getAll",(req,res)=>{
    const users = User.find();
    users.then((users)=>{
        res.send({result:users});
    })
    .catch((e)=>{
        res.send({message:e.message});
    })
})

module.exports = router;