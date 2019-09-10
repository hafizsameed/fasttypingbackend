const express=require("express");
const User = require("../models/User");
const router = express.Router();

// router.put("/updateUser",(req,res)=>{
//  const user = req.body;
//  const newUser = new User(user);
//  newUser.update().then(()=>{
//      res.send({message:"user updated"});
//  })

// })
router.post("/updateUser",(req,res)=>{
    const id =req.body.id
    const  score = req.body.score;
    console.log(score,"score")
    User.update({_id:id},{$push:{score:score}})
    // User.findByIdAndUpdate(data.id,data)
    .then(()=>{
        res.send({message:"user updated"});
    })
    .catch((e)=>{
        res.send({message:e.message})
    })
})
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
router.post("login",(req,res)=>{
    
})

router.post("/getUser",(req,res)=>{
    const name = req.body.name;
    const user = User.find({name})
    user.then((user)=>{
        res.send({result:user})
    })
    .catch((e)=>{
        res.send({message:e.message});
    })
})

router.get("/getHighscores/:level",(req,res)=>{
    const level = req.params.level;
    User.find({$query:{'score.level':level},$orderby:{'score.val':-1}})
    .then((data)=>{
        res.send({result:data});
    })
    .catch((e)=>{
        res.send({message:e.message})
    })
})

router.get("/getAll",(req,res)=>{
    const users = User.find();
    users.then((users)=>{
        res.send({result:users});
    })
    .catch((e)=>{
        res.send({message:e.message});
    })
})

module.exports = router;