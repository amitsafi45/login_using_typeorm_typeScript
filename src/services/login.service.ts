import dataSource from "../database/config";
import User from "../entity/login.entity";
import jwt from "jsonwebtoken";
import 'dotenv/config'
import { json } from "stream/consumers";
const ACCESS_TOKEN = "kjwfrgifyugjhfgeyfuyfgugfu";
class LoginService {
  static LoginUser = async (userData) => {
    try {
      const userRepo = await dataSource.getRepository(User);
      const findingData = await userRepo.findOne({
        where: {
          email: userData.email,
        },
      });
    
       if (findingData) {
         if (findingData.email === userData.email) {
           const token = jwt.sign(userData,process.env.ACCESS_TOKEN||ACCESS_TOKEN, {
             expiresIn: "1d",
           });
           return token;
         }
       }
        
      

    }
     catch (error) {
      return error;
    }
  };
}
export default LoginService;
