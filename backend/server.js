const express=require('express');
const colors =require('colors')
const dotenv=require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const connectDB=require('./config/db')
const mongoose = require("mongoose");
const port =process.env.PORT
const cors = require("cors");

// connectDB()

mongoose
//   .connect("mngodb+srv://Nuha:Nuha@cluster0.yyzbd.moongodb.net/TrufDb?retryWrites=true&w=majority")
  .connect("mongodb+srv://Nuha:Nuha@cluster0.yyzbd.mongodb.net/TrufDb?retryWrites=true&w=majority")
  .then(() => console.log("connected to MOngodb"))
  .catch((err) => console.error(err));

const app=express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/districts',require('./routes/districtRoutes'))
app.use('/api/personalDetails',require('./routes/personalDetailRoutes'))
app.use('/api/turfs',require('./routes/turfRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server is running at port ${port}`))