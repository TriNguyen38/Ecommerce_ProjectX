import { mongoose } from 'mongoose';
mongoose.set('strictQuery', false);

import dotenv from 'dotenv';

dotenv.config();
const linkDB = process.env.MONGO_URL

const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(linkDB);
        if (conn.connection.readyState === 1) 
            console.log("Connection to DB is successful")
        else 
            console.log("DB is connecting");
    } catch (error) {
        console.log("Connection to DB is failed");
        throw new Error(error);
    }
};

export default connectToDB;
