import User from "../models/user.model.js"

export const signup = async(req,res)=>{ 
  const {username,email,password} = req.body;
  // try {
  //   return res.status(400).json({message:"all"})
  // } catch (error) {
  //   console.log("error:",error);
    
  // }

  const newUser = new User({
    username,
    email,
    password  
  })

  try {
    await newUser.save()
    res.json("sign up successful")
  } catch (error) {
    console.log("error",error);
    
  }
}