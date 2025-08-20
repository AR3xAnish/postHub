import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({
  path:'./.env'
})

const app = express();
const port = 3000 

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("MongoDB connected");
  
})
app.listen(port,()=>{
  console.log(`port listening at ${port}`);
  
})