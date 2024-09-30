//Acquaring .env file and other ----
require("dotenv").config();
const mongoose=require("mongoose");
const session=require("express-session");


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





// Routing

application.get('/',(req,res)=>{

});