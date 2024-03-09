import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './config/connectDB.js'
import routerUser from './routers/user.js'
const app = express()
const PORT = process.env.PORT
// const DB_URL = process.env.DB_URL

app.use(express.json())


//connection with DB
// connectDB(DB_URL)


//user Routes
app.get('/', routerUser)




//Server Listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})