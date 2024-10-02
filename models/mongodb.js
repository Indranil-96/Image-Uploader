const { name } = require("ejs");
const mongoose=require("mongoose");

mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("MOngoDB Connected successfully");
}).catch((err)=>{
    console.log(err);
});

const userschema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    created:{
        type: String,
        required: true,
        default: Date.now,
    }
});

const ucollection= mongoose.model('ucollection',userschema);
module.exports = ucollection;