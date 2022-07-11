import express from 'express'
import 'dotenv/config'
import router from './routes/router'
//console.log(process.env.type)
import dataSource from './database/config'
const app=express()
app.use(express.json())
app.use('/api',router)
 dataSource.initialize()
app.listen(process.env.PORT,():void=>{
    console.log(`listening${process.env.PORT}`)
})