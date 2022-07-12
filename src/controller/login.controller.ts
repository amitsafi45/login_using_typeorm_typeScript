import {Request,Response} from 'express'
import LoginService from "../services/login.service"
class LoginController{
   static find=async(req:Request,res:Response)=>{
      try{
        const userData=req.body
       const work=await LoginService.LoginUser(userData)
       
       if (work){
         res.status(200).json({
            message:"Token Generated",
            token:work

         })
       }
       
      
}catch(error){
    res.json({
      success:false
    }).status(500)
}
   
   }
}
export default LoginController