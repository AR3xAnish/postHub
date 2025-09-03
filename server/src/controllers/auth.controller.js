import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res,next)=>{ 
  const {username,email,password} = req.body;
  // try {
  //   return res.status(400).json({message:"all"})
  // } catch (error) {
  //   console.log("error:",error);
    
  // }

  if(!username || !email || !password ||username==='' || email==='' || password==='') {
    next(errorHandler(400,"All fields required"))
  }
  const hashedPassword = bcryptjs.hashSync(password,12)
  const newUser = new User({
    username,
    email,
    password:hashedPassword  
  })

  try {
    await newUser.save()
    res.json("sign up successful")
  } catch (error) {
    // console.log("error",error);
    next(error)
  }
}