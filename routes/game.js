const express = require("express");
const router = express.Router();
const Game = require("../models/Game");


router.get("/:level",(req,res)=>{
    const level = req.params.level;
     Game.find({level})
    .then((questions)=>{
        res.send({result:questions});
    })
    .catch((e)=>{
        res.send({message:e.message});
    });

})

router.post("/AddQuestion",(req,res)=>{
const data = req.body;
const newQuestion = new Game(data);
newQuestion.save().then(()=>{
    res.send({message:"question Added"});
})
.catch((e)=>{
    res.send({message:e.message});
})
})
module.exports = router;