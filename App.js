import  Express  from "express";
import Db from "./Connect/db.js";
import router from './Route/Route.js'

Db()
const app=Express()
const port=process.env.port||'3000'
app.use(Express.json())
app.use(router)
app.listen(port,()=>{
    console.log(`server is connected at http://localhost:${port}`)
})
