import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const router = express.Router()
import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const SECRET_KEY = process.env.SECRET_KEY

router.get('/', (req, res) => {
    res.send('Server...')
})

router.post('/registeruser', [

], async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name, !email, !password) {
            res.status(422).json('Please Fill Details')
        }
        else {
            const userEmail = await User.findOne({ email })
            if (userEmail) {
                res.status(400).json('Email Already Exist');
            }
            else {
                const saltRound = 10;
                const hasedPassword = await bcrypt.hash(req.body.password, saltRound)


                const newUser = await new User({ name, email, password: hasedPassword, jwttokens: '' })

                const jwttoken = jwt.sign({ id: newUser._id.toHexString() }, SECRET_KEY)
                newUser.jwttokens = jwttoken

                const result = await newUser.save()
                res.status(200).send(newUser)
            }
        }
    } catch (error) {
        console.error(error)
        res.send('can\'t register user')
    }
})


router.post('/loginuser', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email, !password) {
            res.status(400).json('Please Fill Details')
        }
        else {
            const findUser = await User.findOne({ email })
            if (!findUser) {
                res.status(400).json('User Not Exist')
            }
            else {
                const matchPassword = await bcrypt.compare(password, findUser.password)
                if (matchPassword) {
                    res.status(200).send(findUser)
                } else {
                    res.status(401).json('Invalid Details')
                }
                const token = findUser.jwttokens
                const verifyToken = jwt.verify(token, SECRET_KEY)
                if (!verifyToken) {
                    console.error('Invalid Token')
                }
            }
        }
    } catch (error) {
        console.error(error)
        res.send('can\'t login user')
    }
})


export default router