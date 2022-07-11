import { json } from "stream/consumers";
import dataSource from "../database/config";
import LoginEntity from "../entity/login.entity";
class Service{
    static  LoginUser=async(userData:Object)=>{
        //console.log('i am in service')
        //console.log(userData)
        type ObjectKey = keyof typeof userData;
        const myEmail = 'email' as ObjectKey;
        const mypassword='password' as ObjectKey;
        //console.log(userData[myEmail]);
        //console.log(userData[mypassword])
         const emails=userData[myEmail]
         const password=userData[mypassword]
        //const data={userData}
        //console.log(emails.toString())
        //console.log(email)
        //console.log(Password)
        //const logEntitys=new LoginEntity()
        const loginEntity=await dataSource.getRepository(LoginEntity)
        const findingData=await loginEntity.findBy({email:emails.toString()})
        const passwordData=findingData[0].password
         console.log(passwordData)
         // console.log(findingData.LoginEntity.email)
        //console.log(findingData.email)
        // if(findingData)  {
            
        // } else{

        // }
       // return findingData.email
     //   
        
    }
}

export default Service;