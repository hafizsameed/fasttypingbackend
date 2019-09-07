const express = require("express");
const app= express();
const db = require("./config/db");

db.connection.once("open",()=>{
    console.log("db connected");
})
.on("error",err=>{
    console.log(err,"err");
})
app.listen(process.env.PORT||3001,()=>{
console.log("server is listening..");
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",require('./routes/index.js'));