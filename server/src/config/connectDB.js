import mongoose from 'mongoose'

const connectDB = async (DB_URL) => {
    try {
        const result = await mongoose.connect(DB_URL)
        console.log("Connected DB.")
    } catch (error) {
        console.log(error)
    }
}


export default connectDB