const express = require("express");
const dotenv = require('dotenv')
const userRoutes = require("./routes/userRoutes")

const app = express()


app.get("/",(req,res)=>{
    res.send("API is Running");
})

app.use('/api/user',userRoutes)


const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000;

app.listen(5000,console.log(`server started on PORT ${PORT}`));