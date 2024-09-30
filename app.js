//Acquaring .env file and other ----
require("dotenv").config();
const mongoose=require("mongoose");
const session=require("express-session");
const path=require('path');
const ejs= require('ejs');


// Express----
const express=require("express");

const application=express();
const Port= process.env.Port || 5000;

//Middleware
application.use(express.urlencoded());
application.use(express.json());

application.use(
    session({
        secret: "My secret key",
        saveUninitialized: true,
        resave: false,
}));

application.use((req,res,next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})


// Template Engine
application.set('view engine', ejs);
application.set(express.static(path.join(__dirname,'views')));




// Routing

application.use('',require('./routes/router'));


// Live Server

application.listen(Port,(err)=>{
    if(err){
        console.log("There is a problem in the server");
    }else{
        console.log(`Server is listning to port ${Port}`);
    }
})