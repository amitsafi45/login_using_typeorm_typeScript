import User from "../entity/login.entity";
import { validate } from "class-validator";
import {NextFunction, Request,Response} from 'express'
const validation= async(req:Request,res:Response,next:NextFunction)=>{
  try{
     const user=new User()
     user.email=req.body.email
     user.password=req.body.password
     const errors = await validate(user)
    if (errors.length>0) {
     return res.json({
        success:false,
        message:"Validation Error",
        data:errors
    }).status(500)
  }
  next()
}
catch(error){
return res.json({
  success:false,
  message:"Error Occur From Validation",
  data:error
})
}
  

}
export default validation