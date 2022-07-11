import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import {Max,IsEmail, Min} from 'class-validator'
@Entity()
class LoginEntity{
    @PrimaryGeneratedColumn()
    "id":number
    @Column()
    @IsEmail()
    "email":string
    @Column()
    "password":string
}
export default LoginEntity