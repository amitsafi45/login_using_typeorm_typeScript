import express from 'express'
import validation from '../validation/login.validation'
import User from '../controller/login.controller' 
const router=express.Router()
router.post('/login',validation,User.find)
export default router