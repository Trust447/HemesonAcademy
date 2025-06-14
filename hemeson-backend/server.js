import express from "express"
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const Port = 3000;

app.use(cors())
app.listen(Port, () =>{
    console.log(`sever is running at port: ${Port}`)
}
)