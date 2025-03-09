const express = require ("express");
const cors = require ("cors");
require("dotenv").config();

const app = express();
const PORT =process.env.PORT || 4000;

//Middleware
app.use(cors());
app.use(express.json()); //Allow JSON data in request

//Routes
app.get("/", (req,res)=>{
res.send("Server is running...")
})

module.exports=app;