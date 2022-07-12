import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import {Max,IsEmail, Min} from 'class-validator'
@Entity()
class User{
    @PrimaryGeneratedColumn()
    "id":number
    @Column()
    @IsEmail()
    "email":string
    @Column()
    "password":string
}
export default User