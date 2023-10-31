import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>console.log("connected to db\n"))
.catch(e=>{console.error(e)});

const app = express();


app.listen(3000, ()=>{
    console.log('server running on port 3000')
})