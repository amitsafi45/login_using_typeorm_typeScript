import LoginEntity from "../entity/login.entity";
import { validate } from "class-validator";
import {NextFunction, Request,Response} from 'express'
const validation= async(req:Request,res:Response,next:NextFunction)=>{
     const logEntity=new LoginEntity()
     logEntity.email=req.body.email
     logEntity.password=req.body.password
     const errors = await validate(logEntity)
    if (errors.length>0) {
       //console.log(req.body)
       return res.json({
        success:true,
        status:200,
        message:"Validation Error",
        data:errors
    })
  }
  next()

}
export default validation