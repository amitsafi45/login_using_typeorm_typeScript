import express from 'express'
import validation from '../validation/login.validation'
import LoginController from '../controller/login.controller' 
const router=express.Router()
router.post('/login',validation,LoginController.find)
export default router