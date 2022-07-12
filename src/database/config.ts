import { DataSource } from "typeorm"
import 'dotenv/config'
import User from "../entity/login.entity";
 let dataSource=new DataSource({
    //  type: "mysql",
    //  host:'localhost',
    //  port:3306,
    //  username:'root',
    //  password:'Password@12345',
    //  database:'user_accounts',
    //  synchronize: true,
    //  logging: true,
    //  entities:[User]
    type: "mysql",
    host:process.env.HOST,
    port:Number(process.env.DATABASE_PORT),
    username:'root',
    password:process.env.PASSWORD,
    database:process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities:[User]
 })
 export default dataSource