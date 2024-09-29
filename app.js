//Acquaring .env file and other ----
require("dotenv").config();
const mongoose=require("mongoose");
const session=require("express-session");


// Express----
const express=require("express");

const application=express();
const Port= process.env.Port || 5000;