import express from 'express'
import 'dotenv/config'
import router from './routes/router'
import dataSource from './database/config'
const app=express()
app.use(express.json())
app.use('/api',router)
 app.listen(process.env.PORT,async()=>{
    await dataSource.initialize()
    console.log(`listening${process.env.PORT}`)
})