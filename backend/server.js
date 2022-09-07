const express = require("express");
const dotenv = require('dotenv')
const userRoutes = require("./routes/userRoutes")
const {notFound, errorHandler } = require("./middlewares/errorMiddleware")

const app = express()
app.use(express.json());
// since we take data from the frontend body we are telling the server to accept the json data.

app.get("/",(req,res)=>{
    res.send("API is Running");
})

app.use('/api/user',userRoutes)

// error handling using middlewares. 
app.use(notFound)
app.use(errorHandler)


const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000;

app.listen(5000,console.log(`server started on PORT ${PORT}`));