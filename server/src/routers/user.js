import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('SErver...')
})


export default router