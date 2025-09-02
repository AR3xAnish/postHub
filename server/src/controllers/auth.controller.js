import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const signup = async(req,res)=>{ 
  const {username,email,password} = req.body;
  // try {
  //   return res.status(400).json({message:"all"})
  // } catch (error) {
  //   console.log("error:",error);
    
  // }

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
    console.log("error",error);
    
  }
}