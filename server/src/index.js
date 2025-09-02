import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"

dotenv.config({
  path:'./.env'
})

const app = express();
const port = 3000 

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("MongoDB connected");
  
})

app.use(express.json())

app.listen(port,()=>{
  console.log(`port listening at ${port}`);
})

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)