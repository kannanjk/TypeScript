import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser" 
import compression from "compression"
import cors from "cors"
import mongoose from "mongoose"
import env from "dotenv"
import router from "./Router/Index"

const app = express()

app.use(cors({credentials: true,}))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

env.config()

const server = http.createServer(app)

server.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
    
})

// mongoose.Promise = Promise
// mongoose.connect (process.env.MONGO_URL).then(()=>{
//     console.log("Db connected");
    
// })
 
app.use('/user',router)