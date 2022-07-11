import {Request,Response} from 'express'
import Service from "../services/login.service"
class LoginController{
   static find=async(req:Request,res:Response)=>{
      const userData:Object=req.body
       const work=await Service.LoginUser(userData)
       //console.log(work)
    res.json({
      message:'Data Found',
      status:200,
      data:work
   })
   
   }
}
export default LoginController