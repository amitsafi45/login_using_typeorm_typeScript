import { DataSource } from "typeorm"
import 'dotenv/config'
import LoginEntity from "../entity/login.entity";
console.log(process.env.types)
//const data="mysql"
//console.log(data)
 let dataSource=new DataSource({
      type:'mysql',
      host:process.env.host,
      port:Number(process.env.database_port),
      username:process.env.username,
      password:process.env.password,
      database:process.env.database,
     synchronize: true,
     logging: true,
     entities:[LoginEntity]
 })
 export default dataSource