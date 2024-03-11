import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './config/connectDB.js'
import routerUser from './routers/user.js'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

app.use(express.json())
app.use(cors({
    origin: '*'
}))


//connection with DB
connectDB(DB_URL)


//user Routes
app.get('/', routerUser)
app.post('/registeruser', routerUser)
app.post('/loginuser', routerUser)




//Server Listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})