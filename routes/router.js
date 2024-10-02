const express= require('express');
const rout=express.Router();



rout.get('/',(req,res)=>{
    res.render('home')
    // res.send("Hey Users");
    // res.render('home');
});

module.exports=rout;