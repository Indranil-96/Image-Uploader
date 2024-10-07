const express= require('express');
const rout=express.Router();
const ucollection=require('../models/mongodb');
const multer=require('mul');
const path=require('path');

// Multer configuration
let storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploades');
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname + "_"+ Date.now() + "_" +file.originalname);
    }
});

let upload= multer({
    storage: storage
}).single("image");


rout.get('/',(req,res)=>{
    res.render('home',{title:'Home Page'})
});

rout.get('/add_user',(req,res)=>{
    res.render('add_user',{title:'Add User'})
});

rout.post('/add_user', upload, (req,res)=>{

    const user= new ucollection({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image: req.file.filename,
    });
    user.save((err)=>{
        if(err){
            res.json({message: err.message, type:' danger'});
        }else{
            req.session.message={
                type: 'success',
                message: 'user added successfully!',
            }
        }

        res.redirect('/');
    })
    

})

module.exports=rout;